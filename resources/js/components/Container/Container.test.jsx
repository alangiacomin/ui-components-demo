import TestRenderer from 'react-test-renderer';
import { getChildren, hasClass } from '../../../testsUtils';
import Container from './Container';

describe('Container', () => {
  it('render', () => {
    const { root } = TestRenderer.create(<Container>test</Container>);
    expect(root.findByType('div')).toBeDefined();
  });

  it('children', () => {
    const { root } = TestRenderer.create(<Container>test</Container>);
    expect(getChildren(root.findByType('div'))).toBe('test');
  });

  it('main class', () => {
    const { root } = TestRenderer.create(<Container>test</Container>);
    expect(hasClass(root.findByType('div'), 'container')).toBe(true);
  });

  it('additional string class', () => {
    const { root } = TestRenderer.create(<Container className="myClass">test</Container>);
    expect(hasClass(root.findByType('div'), 'myClass')).toBe(true);
  });

  it('additional bool true class', () => {
    const { root } = TestRenderer.create(<Container className={{ myClass: true }}>test</Container>);
    expect(hasClass(root.findByType('div'), 'myClass')).toBe(true);
  });

  it('additional bool false class', () => {
    const { root } = TestRenderer.create(<Container className={{ myClass: false }}>test</Container>);
    expect(hasClass(root.findByType('div'), 'myClass')).toBe(false);
  });
});
