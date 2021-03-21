import { PropTypes } from 'prop-types';
import Container from '../Container/Container';

const LayoutMain = (props) => {
  const { children } = props;
  return (
    <>
      <Container>
        {children}
      </Container>
    </>
  );
};

LayoutMain.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutMain;
