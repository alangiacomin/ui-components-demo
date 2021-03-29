import { PropTypes } from 'prop-types';

const Types = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({ }),
  ]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

// eslint-disable-next-line import/prefer-default-export
export { Types };
