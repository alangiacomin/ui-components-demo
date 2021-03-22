import { getRoutesFromConfig } from '../utils/routeHelper';
import routesConfig from './routes';

const routes = getRoutesFromConfig(routesConfig);

const navbarLinks = {
  topLeft: [
    routes.home,
    routes.secondPage,
  ],
  topRight: [
    routes.login,
    routes.logout,
  ],
};

export default navbarLinks;
