import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import routesConfig from './config/routes';
import configureStore, { history } from './configureStore';
import Routes from './Routes';
import { getRoutesFromConfig } from './utils/routeHelper';

// const routes = {};

const Application = () => {
  const store = configureStore({});
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ErrorBoundary>
          <Routes routes={getRoutesFromConfig(routesConfig)} />
        </ErrorBoundary>
      </ConnectedRouter>
    </Provider>
  );
};

Application.propTypes = {};

export default Application;
