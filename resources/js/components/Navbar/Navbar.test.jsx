import { TestRender } from '../../../testsUtils';
import Navbar from './Navbar';

describe('Navbar', () => {
  const defaultProps = {
    brand: {
      to: '',
    },
  };
  it('render', () => {
    const { renderWrapped, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        renderWrapped(
          <Navbar {...defaultProps}>test</Navbar>,
        );
      },
      assert: () => {
        expectSelector('div').toBeDefined();
      },
    });
  });
});
