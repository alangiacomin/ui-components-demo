import { render as renderDom, unmountComponentAtNode } from 'react-dom';
import { act as actDom } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { combineReducers, createStore } from 'redux';

const emptyReducer = (state = [], action) => state;

const TestRender = () => {
  let container = null;
  const render = (Component) => renderDom(Component, container);
  const renderWrapped = (Component, { initialState = {}, reducers = [] } = {}) => {
    const store = createStore(combineReducers({ user: emptyReducer }, ...reducers), initialState);
    renderDom(
      <Provider store={store}>
        <MemoryRouter>{Component}</MemoryRouter>
      </Provider>,
      container,
    );
  };
  const expectSelector = (sel) => expect(container.querySelector(sel));
  const execute = ({ arrange, act, assert }) => {
    // before each test
    container = document.createElement('div');
    document.body.appendChild(container);
    // test
    arrange && arrange();
    actDom(act);
    assert();
    // after each test
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  };

  return {
    execute, render, renderWrapped, expectSelector,
  };
};

/*
const createElement = (Element) => {
  const WrappedElement = (props) => <Element />;
  const testRenderer = TestRenderer.create(<WrappedElement />);
  return testRenderer.root;
};

const hasClass = (domElement, className) => domElement.props.className.split(' ').includes(className);

const getChildren = (domElement) => domElement.props.children;

const getProp = (domElement, prop) => domElement.props[prop];

const testRender = (children, { initialState, reducers = [] } = {}) => {
  const store = createStore(combineReducers({ user: emptyReducer }, ...reducers), initialState);
  return TestRenderer.create(
    <Provider store={store}>
      <MemoryRouter>{children}</MemoryRouter>
    </Provider>,
  );
};
*/

const noOpFunc = () => null;

export {
  TestRender,
  noOpFunc,
  // createElement,
  // hasClass,
  // getChildren,
  // testRender,
  // createElement,
  // hasClass,
  // getChildren,
  // testRender,
  // getProp,
};
