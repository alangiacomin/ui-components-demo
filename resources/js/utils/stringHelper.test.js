import { isEmptyString, trimStart, upperFirst } from './stringHelper';

describe('isEmptyString', () => {
  test('null string', () => {
    const empty = isEmptyString(null);
    expect(empty).toBe(true);
  });

  test('undefined string', () => {
    const empty = isEmptyString(undefined);
    expect(empty).toBe(true);
  });

  test('not a string', () => {
    const empty = isEmptyString(Array(7));
    expect(empty).toBe(false);
  });

  test('empty string', () => {
    const empty = isEmptyString('');
    expect(empty).toBe(true);
  });

  test('full string', () => {
    const empty = isEmptyString('The quick brown fox jumped over the lazy dogs');
    expect(empty).toBe(false);
  });
});

describe('trimStart', () => {
  test('null string', () => {
    const trimmed = trimStart(null);
    expect(trimmed).toMatch('');
  });

  test('undefined string', () => {
    const trimmed = trimStart(undefined);
    expect(trimmed).toMatch('');
  });

  test('not a string', () => {
    const trimmed = trimStart(Array(7));
    expect(trimmed).toMatch('');
  });

  test('empty string', () => {
    const trimmed = trimStart('');
    expect(trimmed).toMatch('');
  });

  test('no trim, default char', () => {
    const trimmed = trimStart('xProva');
    expect(trimmed).toMatch('xProva');
  });

  test('no trim, empty char', () => {
    const trimmed = trimStart('xProva', '');
    expect(trimmed).toMatch('xProva');
  });

  test('first char', () => {
    const trimmed = trimStart('xProva', 'x');
    expect(trimmed).toMatch('Prova');
  });

  test('not first char', () => {
    const trimmed = trimStart('xProva', 'P');
    expect(trimmed).toMatch('Prova');
  });
});

describe('upperFirst', () => {
  test('null string', () => {
    const upper = upperFirst(null);
    expect(upper).toMatch('');
  });

  test('undefined string', () => {
    const upper = upperFirst(undefined);
    expect(upper).toMatch('');
  });

  test('not a string', () => {
    const upper = upperFirst(Array(7));
    expect(upper).toMatch('');
  });

  test('empty string', () => {
    const upper = upperFirst('');
    expect(upper).toMatch('');
  });

  test('one char string', () => {
    const upper = upperFirst('a');
    expect(upper).toMatch('A');
  });

  test('complex string', () => {
    const upper = upperFirst('tHE QUICK BROWN FOX JUMPED OVER THE LAZY DOGS');
    expect(upper).toMatch('The quick brown fox jumped over the lazy dogs');
  });
});
