const routes = {
  home: {
    title: 'home',
    to: '/',
    component: 'PaginaUno',
  },
  secondPage: {
    title: 'page_two',
    to: '/test',
    component: 'PaginaDue',
    perm: 'special_users_only',
  },
  login: {
    title: 'login',
    to: '/login',
    component: 'Login',
    perm: 'special_guests_only',
  },
  logout: {
    title: 'logout',
    to: '/logout',
    component: 'PaginaDue',
    perm: 'special_users_only',
  },
};

export default routes;
