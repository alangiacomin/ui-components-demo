import { unmountComponentAtNode } from 'react-dom';
import TestRenderer from 'react-test-renderer';

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

export {
  createElement, hasClass, getChildren,
};
