import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import {
  applyMiddleware, combineReducers, compose, createStore,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './reducers/userReducer';

const history = createBrowserHistory({ basename: '/' });

// const rootReducer = (state = [], action) => state;
const reducers = {
  // rootProva: rootReducer,
  user: userReducer,
};

const middlewares = []; // [loggerMiddleware, thunkMiddleware]
const enhancers = [];

const configureStore = (preloadedState) => {
  const store = createStore(
    combineReducers({ router: connectRouter(history), ...reducers }),
    preloadedState,
    composeWithDevTools(compose(applyMiddleware(...middlewares), ...enhancers)),
  );
  return store;
};

export {
  configureStore as default,
  history,
};
