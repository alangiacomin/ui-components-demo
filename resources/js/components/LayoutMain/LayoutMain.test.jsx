import { TestRender } from '../../../testsUtils';
import LayoutMain from './LayoutMain';

describe('LayoutMain', () => {
  it('render', () => {
    const { renderWrapped, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        renderWrapped(
          <LayoutMain>test</LayoutMain>,
        );
      },
      assert: () => {
        expectSelector('.nav').toBeDefined();
        expectSelector('.container').toBeDefined();
      },
    });
  });

  it('children', () => {
    const { renderWrapped, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        renderWrapped(
          <LayoutMain>test</LayoutMain>,
        );
      },
      assert: () => {
        expectSelector('.container').toHaveTextContent('test');
      },
    });
  });
});
