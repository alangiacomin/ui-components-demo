import TestRenderer from 'react-test-renderer';
import { getChildren, hasClass } from '../../../testsUtils';
import Row from './Row';

describe('Row', () => {
  it('render', () => {
    const { root } = TestRenderer.create(<Row>test</Row>);
    expect(root.findByType('div')).toBeDefined();
  });

  it('children', () => {
    const { root } = TestRenderer.create(<Row>test</Row>);
    expect(getChildren(root.findByType('div'))).toBe('test');
  });

  it('main class', () => {
    const { root } = TestRenderer.create(<Row>test</Row>);
    expect(hasClass(root.findByType('div'), 'row')).toBe(true);
  });

  it('additional string class', () => {
    const { root } = TestRenderer.create(<Row className="myClass">test</Row>);
    expect(hasClass(root.findByType('div'), 'myClass')).toBe(true);
  });

  it('additional true class', () => {
    const { root } = TestRenderer.create(<Row className={{ myClass: true }}>test</Row>);
    expect(hasClass(root.findByType('div'), 'myClass')).toBe(true);
  });

  it('additional false class', () => {
    const { root } = TestRenderer.create(<Row className={{ myClass: false }}>test</Row>);
    expect(hasClass(root.findByType('div'), 'myClass')).toBe(false);
  });
});
