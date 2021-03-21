import classNames from 'classnames';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavbarItems = (props) => {
  const { className, links } = props;
  const navbarItemsClassName = classNames(
    'navbar-nav',
    className,
  );
  return (
    <ul className={navbarItemsClassName}>
      {links && links.map((link) => {
        const cn = classNames(
          'nav-item',
        );
        return (
          <li key={link.id} className={cn}>
            <NavLink
              className="nav-link"
              to={link.to}
              exact={link.exact}
              isActive={link.isActive}
            >{link.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

NavbarItems.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({ }),
  ]),
  links: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    to: PropTypes.string,
    exact: PropTypes.bool,
    isActive: PropTypes.func,
    title: PropTypes.string,
  })).isRequired,
};

NavbarItems.defaultProps = {
  className: null,
};

export default NavbarItems;
