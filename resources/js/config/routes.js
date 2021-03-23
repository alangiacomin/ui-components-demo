const routes = {
  home: {
    title: 'Home',
    to: '/',
    component: 'PaginaUno',
  },
  secondPage: {
    title: 'Seconda pagina',
    to: '/test',
    component: 'PaginaDue',
    perm: 'special_users_only',
  },
  login: {
    title: 'Login',
    to: '/login',
    component: 'Login',
    perm: 'special_guests_only',
  },
  logout: {
    title: 'Logout',
    to: '/logout',
    component: 'PaginaDue',
    perm: 'special_users_only',
  },
};

export default routes;
