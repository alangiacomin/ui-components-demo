import { getChildren, testRender } from '../../../testsUtils';
import Container from '../Container/Container';
import Navbar from '../Navbar/Navbar';
import LayoutMain from './LayoutMain';

describe('LayoutMain', () => {
  it('render', () => {
    const { root } = testRender(
      <LayoutMain>test</LayoutMain>,
    );
    expect(root.findByType(Navbar)).toBeDefined();
    expect(root.findByType(Container)).toBeDefined();
  });

  it('children', () => {
    const { root } = testRender(
      <LayoutMain>test</LayoutMain>,
    );
    expect(getChildren(root.findByType(Container))).toBe('test');
  });
});
