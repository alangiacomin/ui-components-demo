import { getChildren, hasClass, testRender } from '../../../testsUtils';
import Navbar from './Navbar';

describe('Container', () => {
  it('render', () => {
    const { root } = testRender(
      <Navbar>test</Navbar>,
    );
    expect(root.findByType('div')).toBeDefined();
  });

  it('children', () => {
    const { root } = testRender(
      <Navbar>test</Navbar>,
    );
    expect(getChildren(root.findByType('div'))).toBe('test');
  });

  it('main class', () => {
    const { root } = testRender(
      <Navbar>test</Navbar>,
    );
    expect(hasClass(root.findByType('div'), 'container')).toBe(true);
  });

  it('additional string class', () => {
    const { root } = testRender(
      <Navbar className="myClass">test</Navbar>,
    );
    expect(hasClass(root.findByType('div'), 'myClass')).toBe(true);
  });

  it('additional true class', () => {
    const { root } = testRender(
      <Navbar className={{ myClass: true }}>test</Navbar>,
    );
    expect(hasClass(root.findByType('div'), 'myClass')).toBe(true);
  });

  it('additional false class', () => {
    const { root } = testRender(
      <Navbar className={{ myClass: false }}>test</Navbar>,
    );
    expect(hasClass(root.findByType('div'), 'myClass')).toBe(false);
  });
});
