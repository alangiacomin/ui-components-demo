import TestRenderer from 'react-test-renderer';
import { getChildren, hasClass } from '../../../testsUtils';
import Col from './Col';

describe('Col', () => {
  it('render', () => {
    const { root } = TestRenderer.create(<Col>test</Col>);
    expect(root.findByType('div')).toBeDefined();
  });

  it('children', () => {
    const { root } = TestRenderer.create(<Col>test</Col>);
    expect(getChildren(root.findByType('div'))).toBe('test');
  });

  it('main class', () => {
    const { root } = TestRenderer.create(<Col>test</Col>);
    expect(hasClass(root.findByType('div'), 'col')).toBe(true);
  });

  it('additional string class', () => {
    const { root } = TestRenderer.create(<Col className="myClass">test</Col>);
    expect(hasClass(root.findByType('div'), 'myClass')).toBe(true);
  });

  it('additional true class', () => {
    const { root } = TestRenderer.create(<Col className={{ myClass: true }}>test</Col>);
    expect(hasClass(root.findByType('div'), 'myClass')).toBe(true);
  });

  it('additional false class', () => {
    const { root } = TestRenderer.create(<Col className={{ myClass: false }}>test</Col>);
    expect(hasClass(root.findByType('div'), 'myClass')).toBe(false);
  });
});
