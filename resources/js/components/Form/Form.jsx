/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { createContext } from 'react';

/*
https://medium.com/@ippei.tanaka/form-with-the-new-react-context-api-12e3ba601b3d
*/

const FormContext = createContext({ onChangeData: () => null });

const Form = (props) => {
  const { onChangeData, children } = props;
  //console.log('form-props', props);

  return (
    <FormContext.Provider value={{ onChangeData }}>
      {children}
    </FormContext.Provider>
  );
};

export const FormConsumer = ({ children }) => (
  <FormContext.Consumer>
    {(context) => children({ ...context })}
  </FormContext.Consumer>
);

export default Form;
