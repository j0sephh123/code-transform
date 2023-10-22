describe('Convert Function Declaration to Arrow Function', () => {
  const functionDeclaration = function (x) {
    return x * x;
  };
  const arrowFunction = (x) => x * x;

  test.only('should return the square for positive integers', () => {
    expect(functionDeclaration(5)).toBe(arrowFunction(5));
    expect(functionDeclaration(3)).toBe(arrowFunction(3));
  });

  test('should return the square for negative integers', () => {
    expect(functionDeclaration(-5)).toBe(arrowFunction(-5));
    expect(functionDeclaration(-3)).toBe(arrowFunction(-3));
  });

  test('should return zero when input is zero', () => {
    expect(functionDeclaration(0)).toBe(arrowFunction(0));
  });

  test('should return the square for floating point numbers', () => {
    expect(functionDeclaration(0.5)).toBeCloseTo(arrowFunction(0.5), 5);
    expect(functionDeclaration(-0.2)).toBeCloseTo(arrowFunction(-0.2), 5);
  });

  test('should return NaN for undefined or null inputs', () => {
    expect(functionDeclaration(undefined)).toBeNaN();
    expect(functionDeclaration(null)).toBeNaN();
    expect(arrowFunction(undefined)).toBeNaN();
    expect(arrowFunction(null)).toBeNaN();
  });

  test('should return NaN for non-numeric inputs', () => {
    expect(functionDeclaration('string')).toBeNaN();
    expect(functionDeclaration({})).toBeNaN();
    expect(functionDeclaration([])).toBeNaN();
    expect(arrowFunction('string')).toBeNaN();
    expect(arrowFunction({})).toBeNaN();
    expect(arrowFunction([])).toBeNaN();
  });
});
