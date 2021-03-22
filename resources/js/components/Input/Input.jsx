/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { createContext, forwardRef, useRef } from 'react';
import { FormConsumer } from '../Form/Form';

const FormContext = createContext({ onChangeData: () => null });

const withFormProvider = (Wrapped) => {
  const WrappedConsumer = forwardRef((props, ref) => {
    const a = 5;
    console.log('with-props', props);
    return (
      <FormContext.Consumer>
        {(context) =>
          // console.log('context', context);
          (<Wrapped {...props} {...context} />)}
      </FormContext.Consumer>
    );
  });
  return WrappedConsumer;
};

const Input2 = (props) => {
  console.log('input-props', props);
  const { name, onChangeData } = props;
  const ref = useRef();
  const handleChange = () => {
    console.log('handleChange');
    onChangeData(ref.current.name, ref.current.value);
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
        name={name}
        onChange={handleChange}
      />
    </div>
  );
};

const Input = (props) => {
  // console.log('input-props', props);
  const { name } = props;
  const ref = useRef();
  return (
    <FormConsumer>
      {(props2) => {
        // console.log('consumer-props', props2);
        const { onChangeData } = props2;
        const handleChange = () => {
          // console.log('handleChange');
          onChangeData(ref.current.name, ref.current.value);
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
              name={name}
              onChange={handleChange}
            />
          </div>
        );
      }}
    </FormConsumer>
  );
};

export default Input;
// export default withFormProvider(Input);
