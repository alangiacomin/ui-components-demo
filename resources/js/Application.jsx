import { ConnectedRouter, connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { PropTypes } from 'prop-types';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import {
  applyMiddleware, combineReducers, compose, createStore,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import LazyComponent from './components/LazyComponent/LazyComponent';

// import thunkMiddleware from 'redux-thunk'

// import monitorReducersEnhancer from './enhancers/monitorReducers'
// import loggerMiddleware from './middleware/logger'
// import rootReducer from './reducers'

const rootReducer = (state = [], action) => state;

export const history = createBrowserHistory({ basename: '/' });

const configureStore = (preloadedState) => {
  const middlewares = []; // [loggerMiddleware, thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares);

  // const enhancers = []; [middlewareEnhancer, monitorReducersEnhancer]
  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);

  // const store = createStore(compose(rootReducer, composeWithDevTools()), preloadedState, composedEnhancers);
  // const store = createStore(rootReducer, composeWithDevTools());
  const store = createStore(
    combineReducers({ root: rootReducer, router: connectRouter(history) }),
    preloadedState,
    composeWithDevTools(composedEnhancers),
  );

  return store;
};

const store = configureStore({});

// const useAppContext = () => useContext(store);

// const importPage = (page) => import(`./pages/${page}/${page}`);

const Application = (props) => {
  const { importPage } = props;
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact component={() => <LazyComponent component={() => importPage('PaginaUno')} />} />
          <Route path="/" component={() => <LazyComponent component={() => importPage('PaginaDue')} />} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
};

Application.propTypes = {
  importPage: PropTypes.func.isRequired,
};

export default Application;
