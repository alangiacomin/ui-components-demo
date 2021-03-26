import { noOpFunc, TestRender } from '../../../testsUtils';
import Input from './Input';

describe('Input', () => {
  it('render', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <Input name="myInput" setFormData={noOpFunc} />,
        );
      },
      assert: () => {
        expectSelector('input').toBeDefined();
      },
    });
  });

  it('main class', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <Input name="myInput" setFormData={noOpFunc} />,
        );
      },
      assert: () => {
        expectSelector('input').toHaveClass('form-control');
      },
    });
  });

  it('type text (default)', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <Input name="myInput" setFormData={noOpFunc} />,
        );
      },
      assert: () => {
        expectSelector('input').toHaveAttribute('type', 'text');
      },
    });
  });

  it('type text', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <Input name="myInput" setFormData={noOpFunc} type="text" />,
        );
      },
      assert: () => {
        expectSelector('input').toHaveAttribute('type', 'text');
      },
    });
  });

  it('type submit', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <Input name="myInput" setFormData={noOpFunc} type="submit" />,
        );
      },
      assert: () => {
        expectSelector('input').toHaveAttribute('type', 'submit');
      },
    });
  });

  it('type password', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <Input name="myInput" setFormData={noOpFunc} type="password" />,
        );
      },
      assert: () => {
        expectSelector('input').toHaveAttribute('type', 'password');
      },
    });
  });

  it('default value', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <Input name="myInput" setFormData={noOpFunc} />,
        );
      },
      assert: () => {
        expectSelector('input').toHaveAttribute('value', '');
      },
    });
  });

  it('set value', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <Input name="myInput" setFormData={noOpFunc} value="testValue" />,
        );
      },
      assert: () => {
        expectSelector('input').toHaveAttribute('value', 'testValue');
      },
    });
  });

  it('autoFocus not set', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <Input name="myInput" setFormData={noOpFunc} />,
        );
      },
      assert: () => {
        expectSelector('input').not.toHaveFocus();
      },
    });
  });

  it('autoFocus set', () => {
    const { render, expectSelector, execute } = TestRender();
    execute({
      act: () => {
        render(
          <Input name="myInput" setFormData={noOpFunc} autoFocus />,
        );
      },
      assert: () => {
        expectSelector('input').toHaveFocus();
      },
    });
  });
});
