import { TestRender } from '../../../testsUtils';
import Errore from './Errore';

describe('Errore', () => {
  it('render default', () => {
    const { renderWrapped, execute, getContainer } = TestRender();
    execute({
      act: () => {
        renderWrapped(
          <Errore />,
        );
      },
      assert: () => {
        const container = getContainer();
        expect(container).toContainHTML('Undefined_error');
      },
    });
  });

  it('render unauthorized', () => {
    const { renderWrapped, execute, getContainer } = TestRender();
    execute({
      act: () => {
        renderWrapped(
          <Errore errorCode={403} />,
        );
      },
      assert: () => {
        const container = getContainer();
        expect(container).toContainHTML('Unauthorized');
      },
    });
  });

  it('render page not found', () => {
    const { renderWrapped, execute, getContainer } = TestRender();
    execute({
      act: () => {
        renderWrapped(
          <Errore errorCode={404} />,
        );
      },
      assert: () => {
        const container = getContainer();
        expect(container).toContainHTML('Page_not_found');
      },
    });
  });
});
