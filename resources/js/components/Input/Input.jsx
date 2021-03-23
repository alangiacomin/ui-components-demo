/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useCallback, useRef } from 'react';
import { withForm } from '../Form/Form';

const Input = (props) => {
  const {
    setFormData, name, type, value,
  } = props;
  const ref = useRef();
  const handleChange = useCallback(() => {
    setFormData(ref.current.name, ref.current.value);
  }, [setFormData]);
  return (
    <div className="form-group">
      <label htmlFor="myInput">Input {name}</label>
      <input
        ref={ref}
        className="form-control"
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default withForm(Input);
