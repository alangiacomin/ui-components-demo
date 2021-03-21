import TestRenderer from 'react-test-renderer';
import { getChildren, hasClass } from '../../../testsUtils';
import NavbarItems from './NavbarItems';

xdescribe('NavbarItems', () => {
  it('render', () => {
    const { root } = TestRenderer.create(<NavbarItems>test</NavbarItems>);
    expect(root.findByType('div')).toBeDefined();
  });

  it('children', () => {
    const { root } = TestRenderer.create(<NavbarItems>test</NavbarItems>);
    expect(getChildren(root.findByType('div'))).toBe('test');
  });

  it('main class', () => {
    const { root } = TestRenderer.create(<NavbarItems>test</NavbarItems>);
    expect(hasClass(root.findByType('div'), 'container')).toBe(true);
  });

  it('additional string class', () => {
    const { root } = TestRenderer.create(<NavbarItems className="myClass">test</NavbarItems>);
    expect(hasClass(root.findByType('div'), 'myClass')).toBe(true);
  });

  it('additional true class', () => {
    const { root } = TestRenderer.create(<NavbarItems className={{ myClass: true }}>test</NavbarItems>);
    expect(hasClass(root.findByType('div'), 'myClass')).toBe(true);
  });

  it('additional false class', () => {
    const { root } = TestRenderer.create(<NavbarItems className={{ myClass: false }}>test</NavbarItems>);
    expect(hasClass(root.findByType('div'), 'myClass')).toBe(false);
  });
});
