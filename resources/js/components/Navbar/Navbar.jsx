import classNames from 'classnames';
import { PropTypes } from 'prop-types';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import navbarLinks from '../../config/navbarLinks';
import NavbarItems from './NavbarItems';

const Navbar = (props) => {
  const { expand, colorSchema, brand } = props;
  const validExpand = useCallback(
    () => (['xs', 'sm', 'md', 'lg', 'xl'].includes(expand) ? expand : null),
    [expand],
  );
  const validColorSchema = useCallback(
    () => (['light', 'dark'].includes(colorSchema) ? colorSchema : null),
    [colorSchema],
  );

  const navbarClassName = classNames(
    'navbar',
    `navbar-expand-${validExpand() ?? Navbar.defaultProps.expand}`,
    `navbar-${validColorSchema() ?? Navbar.defaultProps.colorSchema}`,
    `bg-${validColorSchema() ?? Navbar.defaultProps.colorSchema}`,
  );
  return (
    <nav className={navbarClassName}>
      <Link className="navbar-brand" to={brand.to}>{brand.title}</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        {navbarLinks.topLeft
          && <NavbarItems className="mr-auto" links={navbarLinks.topLeft} />}
        {navbarLinks.topRight
          && <NavbarItems className="ml-auto" links={navbarLinks.topRight} />}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  expand: PropTypes.string,
  colorSchema: PropTypes.string,
  brand: PropTypes.shape({
    to: PropTypes.string,
    title: PropTypes.string,
  }),
};

Navbar.defaultProps = {
  expand: 'lg',
  colorSchema: 'light',
  brand: null,
};

export default Navbar;
