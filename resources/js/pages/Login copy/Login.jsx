/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  createContext, useCallback, useEffect, useRef, useState,
} from 'react';
import Col from '../../components/Col/Col';
import LayoutMain from '../../components/LayoutMain/LayoutMain';
import Row from '../../components/Row/Row';

const initialData = {};

const FormContext = createContext({});

const Input = (props) => {
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

const Login = () => {
  const login = useCallback(() => {
    // eslint-disable-next-line no-console
    console.log('esegui login');
  }, []);

  const [formData, setFormData] = useState({});

  const updateData = useCallback((name, value) => {
    setFormData({ ...formData, [name]: value });
  }, [formData]);

  useEffect(() => {
    console.log('formData', formData);
  }, [formData]);

  return (
    <LayoutMain>
      <h1>LOGIN</h1>
      <Row>
        <Col>
          <FormContext.Provider value={{ updateData }}>
            <Input name="primo" />
            <Input name="secondo" />
            <Input name="terzo" />
          </FormContext.Provider>
        </Col>
      </Row>
    </LayoutMain>
  );
};
export default Login;
