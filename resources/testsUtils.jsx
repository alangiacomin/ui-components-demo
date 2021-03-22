import { unmountComponentAtNode } from 'react-dom';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import TestRenderer from 'react-test-renderer';
import { combineReducers, createStore } from 'redux';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const createElement = (Element) => {
  const WrappedElement = (props) => <Element />;
  const testRenderer = TestRenderer.create(<WrappedElement />);
  return testRenderer.root;
};

const hasClass = (domElement, className) => domElement.props.className.split(' ').includes(className);

const getChildren = (domElement) => domElement.props.children;

const emptyReducer = (state = [], action) => state;

const testRender = (children, { initialState, reducers = [] } = {}) => {
  const store = createStore(combineReducers({ user: emptyReducer }, ...reducers), initialState);
  return TestRenderer.create(
    <Provider store={store}>
      <MemoryRouter>{children}</MemoryRouter>
    </Provider>,
  );
};

export {
  createElement, hasClass, getChildren, testRender,
};
