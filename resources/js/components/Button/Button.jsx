/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { withForm } from '../Form/Form';

const Button = (props) => {
  const { disabled, children } = props;
  return (
    <button type="submit" className="btn btn-primary" disabled={disabled}>{children}</button>
  );
};

export default withForm(Button);
