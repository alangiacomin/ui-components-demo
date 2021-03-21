import { PropTypes } from 'prop-types';
import { Route, Switch } from 'react-router';
import LazyComponent from './components/LazyComponent/LazyComponent';

const importPage = (page) => import(`./pages/${page}/${page}`);

const Routes = ({ routes }) => (
  <Switch>
    {routes && Object.entries(routes)
      .map(([key, route]) => (
        route.component
          ? (
            <Route
              key={key}
              {...route}
              component={() => <LazyComponent component={() => importPage(route.component)} />}
            />
          )
          : null))}
    <Route path="*">
      <h1>NON TROVATO</h1>
    </Route>
  </Switch>
);

Routes.propTypes = {
  routes: PropTypes.shape({ }).isRequired,
};

export default Routes;
