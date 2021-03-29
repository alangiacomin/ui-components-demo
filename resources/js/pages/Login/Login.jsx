/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { postLogin } from '../../apis/apiUser';
import Button from '../../components/Button/Button';
import Col from '../../components/Col/Col';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import LayoutMain from '../../components/LayoutMain/LayoutMain';
import Row from '../../components/Row/Row';
import { USER_ACTIONS } from '../../reducers/userReducer';

const Login = () => {
  const [loginData, setLoginData] = useState({ });
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  const login = useCallback(() => {
    const { email, password } = loginData;
    setSubmitting(true);
    setErrorMessage('');
    postLogin(email, password)
      .then((response) => {
        dispatch({ type: USER_ACTIONS.LOGGED_IN, payload: response });
      })
      .catch((error) => {
        setSubmitting(false);
        if (error.response?.status === 422) {
          setErrorMessage('Login fallito');
        }
      });
  }, [dispatch, loginData]);

  return (
    <LayoutMain>
      <h1>LOGIN</h1>
      <Row>
        <Col>
          <Form data={loginData} setData={setLoginData} onSubmit={login}>
            <Input name="email" autoFocus />
            <Input name="password" type="password" />
            <Button disabled={submitting}>Login</Button>
          </Form>
          <p>{errorMessage}</p>
        </Col>
      </Row>
    </LayoutMain>
  );
};

export default Login;
