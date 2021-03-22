import { hasPermission, hasRole, hasStrictPermission } from './userHelper';

describe('hasRole', () => {
  test('description', () => {
    const result = hasRole(null);
    expect(result).toBe(false);
  });
});

describe('hasPermission', () => {
  test('description', () => {
    const result = hasPermission({});
    expect(result).toBe(true);
  });
});

describe('hasStrictPermission', () => {
  test('description', () => {
    const result = hasStrictPermission(null);
    expect(result).toBe(true);
  });
});
