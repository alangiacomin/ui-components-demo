import classNames from 'classnames';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { hasPermission } from '../../utils/userHelper';

const NavbarItems = (props) => {
  const { className, links } = props;
  const user = useSelector((state) => state.user);
  const navbarItemsClassName = classNames(
    'navbar-nav',
    className,
  );

  return (
    <ul className={navbarItemsClassName}>
      {links && links.map((link) => {
        if (!hasPermission(user, link.perm)) {
          return null;
        }
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
