import noEqNull from './no-eq-null';

describe('noEqNull rule', () => {
  // Tests for valid cases
  it('should return true for triple equals with null', () => {
    expect(noEqNull('if (x === null) { }')).toBe(true);
  });

  it('should return true for triple equals with null in reverse order', () => {
    expect(noEqNull('if (null === f()) { }')).toBe(true);
  });

  // Tests for invalid cases
  it('should return false for double equals with null', () => {
    expect(noEqNull('if (x == null) { }')).toBe(false);
  });

  it('should return false for not double equals with null', () => {
    expect(noEqNull('if (x != null) { }')).toBe(false);
  });

  it('should return false for do-while with double equals null', () => {
    expect(noEqNull('do {} while (null == x)')).toBe(false);
  });
});
