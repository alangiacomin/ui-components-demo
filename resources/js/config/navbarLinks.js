import { getRoutesFromConfig } from '../utils/routeHelper';
import routesConfig from './routes';

const routes = getRoutesFromConfig(routesConfig);

const navbarLinks = {
  topLeft: [
    routes.home,
    routes.secondPage,
  ],
  topRight: [
    routes.secondPage,
  ],
};

export default navbarLinks;
