/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { createContext, useCallback } from 'react';

const FormContext = createContext({ });

const Form = (props) => {
  const {
    data, setData, onSubmit, children,
  } = props;

  const setFormData = useCallback((name, value) => {
    setData({ ...data, [name]: value });
  }, [data, setData]);

  const handleSubmit = useCallback((event) => {
    onSubmit();
    event.preventDefault();
  }, [onSubmit]);

  return (
    <FormContext.Provider value={{ setFormData }}>
      <form onSubmit={handleSubmit}>
        {children}
      </form>
    </FormContext.Provider>
  );
};

const withForm = (Wrapped) => {
  const WrappedConsumer = (props) => (
    <FormContext.Consumer>
      {(context) => (<Wrapped {...props} {...context} />)}
    </FormContext.Consumer>
  );
  return WrappedConsumer;
};

export {
  Form as default,
  withForm,
};
