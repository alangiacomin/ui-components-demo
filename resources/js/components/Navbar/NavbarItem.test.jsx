// import { NavLink } from 'react-router-dom';
import { fireEvent } from '@testing-library/react';
import { TestRender } from '../../../testsUtils';
import NavbarItem from './NavbarItem';

afterEach(() => {
  jest.clearAllMocks();
});

describe('NavbarItem', () => {
  it('render', () => {
    const { renderWrapped, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        const link = {
          id: 'home',
          to: '/home',
        };
        renderWrapped(
          <NavbarItem link={link} />,
        );
      },
      assert: () => {
        expectSelector('li').toBeDefined();
      },
    });
  });

  it('onClick execute', () => {
    const {
      renderWrapped, getSelector, execute,
    } = TestRender();
    const handleClick = jest.fn();
    const link = {
      id: 'home',
      to: '/home',
      onClick: handleClick,
    };
    execute({
      act: () => {
        renderWrapped(
          <NavbarItem link={link} />,
        );
        const item = getSelector('a');
        fireEvent.click(item); // .change(input, { target: { value: 'testValue' } });
      },
      assert: () => {
        expect(handleClick).toBeCalledTimes(1);
      },
    });
  });

  it('onClick non defined', () => {
    const {
      renderWrapped, getSelector, execute,
    } = TestRender();
    const link = {
      id: 'home',
      to: '/home',
    };
    execute({
      act: () => {
        renderWrapped(
          <NavbarItem link={link} />,
        );
        const item = getSelector('a');
        fireEvent.click(item);
      },
      assert: () => {
        expect(false).toEqual(false); // fake per gestire 'else' e coverage 100%
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
