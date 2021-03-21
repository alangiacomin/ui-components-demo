import { MemoryRouter } from 'react-router';
import TestRenderer from 'react-test-renderer';
import { getChildren } from '../../../testsUtils';
import Container from '../Container/Container';
import Navbar from '../Navbar/Navbar';
import LayoutMain from './LayoutMain';

describe('LayoutMain', () => {
  it('render', () => {
    const { root } = TestRenderer.create(
      <MemoryRouter>
        <LayoutMain>test</LayoutMain>
      </MemoryRouter>,
    );
    expect(root.findByType(Navbar)).toBeDefined();
    expect(root.findByType(Container)).toBeDefined();
  });

  it('children', () => {
    const { root } = TestRenderer.create(
      <MemoryRouter>
        <LayoutMain>test</LayoutMain>
      </MemoryRouter>,
    );
    expect(getChildren(root.findByType(Container))).toBe('test');
  });
});
