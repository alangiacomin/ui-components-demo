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
});
