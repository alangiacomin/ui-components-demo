// import { NavLink } from 'react-router-dom';
import { TestRender } from '../../../testsUtils';
import NavbarItems from './NavbarItems';

describe('NavbarItems', () => {
  it('render', () => {
    const { renderWrapped, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        renderWrapped(
          <NavbarItems links={[]}>test</NavbarItems>,
        );
      },
      assert: () => {
        expectSelector('ul').toBeDefined();
      },
    });
  });

  // it('render', () => {
  //   const { root } = testRender(
  //     <NavbarItems>test</NavbarItems>,
  //   );
  //   expect(root.findByType('ul')).toBeDefined();
  // });

  // it('children', () => {
  //   const { root } = testRender(
  //     <NavbarItems>test</NavbarItems>,
  //   );
  //   expect(getChildren(root.findByType('div'))).toBe('test');
  // });

  // it('main class', () => {
  //   const { root } = testRender(
  //     <NavbarItems>test</NavbarItems>,
  //   );
  //   expect(hasClass(root.findByType('div'), 'container')).toBe(true);
  // });

  // it('additional string class', () => {
  //   const { root } = testRender(
  //     <NavbarItems>test</NavbarItems>,
  //   );
  //   expect(hasClass(root.findByType('div'), 'myClass')).toBe(true);
  // });

  // it('additional true class', () => {
  //   const { root } = testRender(
  //     <NavbarItems>test</NavbarItems>,
  //   );
  //   expect(hasClass(root.findByType('div'), 'myClass')).toBe(true);
  // });

  // it('additional false class', () => {
  //   const { root } = testRender(
  //     <NavbarItems>test</NavbarItems>,
  //   );
  //   expect(hasClass(root.findByType('div'), 'myClass')).toBe(false);
  // });
});
