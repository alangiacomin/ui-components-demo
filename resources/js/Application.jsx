import { ConnectedRouter } from 'connected-react-router';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import routesConfig from './config/routes';
import configureStore, { history } from './configureStore';
import { USER_ACTIONS } from './reducers/userReducer';
import Routes from './Routes';
import { getRoutesFromConfig } from './utils/routeHelper';

const Application = () => {
  const store = configureStore({});

  useEffect(() => {
    // devo farlo così senza useDispatch() perché ancora non sono dentro il <Provider />
    store.dispatch({ type: USER_ACTIONS.SET_PROFILE, payload: window.user });
  }, [store]);

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
