import classNames from 'classnames';
import { PropTypes } from 'prop-types';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { hasPermission } from '../../utils/userHelper';

const NavbarItem = ({ link }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const cn = classNames(
    'nav-item',
  );

  const onClick = useCallback((event) => {
    if (link.onClick) {
      link.onClick(dispatch);
      event.preventDefault();
    }
  }, [dispatch, link]);

  if (!hasPermission(user, link.perm)) {
    return null;
  }

  return (
    <li key={link.id} className={cn}>
      <NavLink
        className="nav-link"
        to={link.to}
        exact={link.exact}
        isActive={link.isActive}
        onClick={onClick}
      >{link.title}
      </NavLink>
    </li>
  );
};

NavbarItem.propTypes = {
  link: PropTypes.shape({
    id: PropTypes.string,
    to: PropTypes.string,
    perm: PropTypes.string,
    exact: PropTypes.bool,
    isActive: PropTypes.func,
    title: PropTypes.string,
    onClick: PropTypes.func,
  }).isRequired,
};

export default NavbarItem;
