import TestRenderer from 'react-test-renderer';
import { getChildren, hasClass } from '../../../testsUtils';
import ColBreak from './ColBreak';

describe('ColBreak', () => {
  it('render', () => {
    const { root } = TestRenderer.create(<ColBreak />);
    expect(root.findByType('div')).toBeDefined();
  });

  it('main class', () => {
    const { root } = TestRenderer.create(<ColBreak />);
    expect(hasClass(root.findByType('div'), 'w-100')).toBe(true);
  });

  it('no children rendered', () => {
    const { root } = TestRenderer.create(<ColBreak>test</ColBreak>);
    expect(getChildren(root.findByType('div'))).toBe(undefined);
  });
});
