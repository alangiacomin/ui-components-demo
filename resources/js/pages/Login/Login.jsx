/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useCallback, useEffect, useState } from 'react';
import Col from '../../components/Col/Col';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import LayoutMain from '../../components/LayoutMain/LayoutMain';
import Row from '../../components/Row/Row';

// const initialData = {};

// const FormContext = createContext({ handleChangeData: () => null });

/*
const Input2 = (props) => {
  const { name } = props;
  const ref = useRef();
  return (
    <FormContext.Consumer>
      {(context) => {
        const handleChange = () => {
          context.updateData(ref.current.name, ref.current.value);
          // console.log('ref', ref);
          // console.log('ref.name', ref.current.name);
          // console.log('ref.value', ref.current.value);
        };
        return (
          <div className="form-group">
            <label htmlFor="myInput">Input {name}</label>
            <input
              ref={ref}
              type="text"
              className="form-control"
              id="myInput"
              {...props}
              onChange={handleChange}
            />
          </div>
        );
      }}
    </FormContext.Consumer>
  );
};
*/

const Login = () => {
  const login = useCallback(() => {
    // eslint-disable-next-line no-console
    console.log('esegui login');
  }, []);

  const [loginData, setLoginData] = useState({});
  const [data, setData] = useState({});

  const onChangeLoginData = useCallback((name, value) => {
    // console.log('change', [name, value]);
    setLoginData({ ...loginData, [name]: value });
  }, [loginData]);
  const onChangeData = useCallback((name, value) => {
    // console.log('change2', [name, value]);
    setData({ ...data, [name]: value });
  }, [data]);

  useEffect(() => {
    console.log('loginData', loginData);
    console.log('data', data);
  }, [data, loginData]);

  return (
    <LayoutMain>
      <h1>LOGIN</h1>
      <Row>
        <Col>
          <Form onChangeData={onChangeLoginData}>
            <Input name="primo" />
            <Input name="secondo" />
            <Input name="terzo" />
          </Form>
          <Form onChangeData={onChangeData}>
            <Input name="first" />
            <Input name="second" />
            <Input name="terzo" />
          </Form>
        </Col>
      </Row>
    </LayoutMain>
  );
};
export default Login;
