import { Application } from "@alangiacomin/ui-components";
import { getRoutesFromConfig } from "@alangiacomin/ui-components/src/utils/routeHelper";
import { render } from "react-dom";
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const routes = {
  home: {
    title: 'Home',
    to: '/',
    component: 'RouteHomePage',
  },
  secondPage: {
    title: 'Seconda pagina',
    to: '/test',
    component: 'RouteSecondPage',
  },
};

render(
  <Application
    routes={getRoutesFromConfig(routes)}
    importComponent={(componentName) => import(`./pages/${componentName}/${componentName}`)}
    NotFoundRoute={()=>(<NotFoundPage />)}
  />,
  document.getElementById('app'),
);
