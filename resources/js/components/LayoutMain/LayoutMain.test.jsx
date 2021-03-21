import TestRenderer from 'react-test-renderer';
import { getChildren } from '../../../testsUtils';
import LayoutMain from './LayoutMain';

describe('LayoutMain', () => {
  it('render', () => {
    const { root } = TestRenderer.create(<LayoutMain>test</LayoutMain>);
    expect(root.findByType('div')).toBeDefined();
  });

  it('children', () => {
    const { root } = TestRenderer.create(<LayoutMain>test</LayoutMain>);
    expect(getChildren(root.findByType('div'))).toBe('test');
  });
});
