import noEmpty from './no-empty';

describe('noEmpty rule', () => {
  // Tests for valid cases
  it('should return true for non-empty if statement', () => {
    expect(noEmpty('if (foo) { bar() }')).toBe(true);
  });

  it('should return true for non-empty while statement', () => {
    expect(noEmpty('while (foo) { bar() }')).toBe(true);
  });

  it('should return true for non-empty for statement', () => {
    expect(noEmpty('for (;foo;) { bar() }')).toBe(true);
  });

  it('should return true for non-empty try-catch statement', () => {
    expect(noEmpty('try { foo() } catch (ex) { foo() }')).toBe(true);
  });

  // Tests for invalid cases
  it('should return false for empty if statement', () => {
    expect(noEmpty('if (foo) {}')).toBe(false);
  });

  it('should return false for empty while statement', () => {
    expect(noEmpty('while (foo) {}')).toBe(false);
  });

  it('should return false for empty for statement', () => {
    expect(noEmpty('for (;foo;) {}')).toBe(false);
  });

  it('should return false for empty try-catch statement', () => {
    expect(noEmpty('try {} catch (ex) {throw ex}')).toBe(false);
  });

  it('should return true for non-empty switch-case statement', () => {
    expect(noEmpty("switch(foo) {case 'foo': break;}")).toBe(true);
  });

  it('should return true for non-empty function expression', () => {
    expect(noEmpty('(function() { bar(); }())')).toBe(true);
  });

  it('should return true for non-empty function declaration', () => {
    expect(noEmpty('function foo() { bar(); }')).toBe(true);
  });

  it('should return true for non-empty arrow function', () => {
    expect(noEmpty('var foo = () => { bar(); };')).toBe(true);
  });

  it('should return true for empty block with comment', () => {
    expect(noEmpty('if (foo) { /* empty */ }')).toBe(true);
  });

  // Tests for invalid cases
  it('should return false for empty switch-case statement', () => {
    expect(noEmpty('switch(foo) {}')).toBe(false);
  });

  it('should return false for empty function expression', () => {
    expect(noEmpty('(function() {}())')).toBe(false);
  });

  it('should return false for empty function declaration', () => {
    expect(noEmpty('function foo() {}')).toBe(false);
  });

  it('should return false for empty arrow function', () => {
    expect(noEmpty('var foo = () => {};')).toBe(false);
  });

  it('should return false for try-catch with empty try block', () => {
    expect(noEmpty('try {} catch (ex) { bar(); }')).toBe(false);
  });

  it('should return false for try-catch with empty catch block', () => {
    expect(noEmpty('try { bar(); } catch (ex) {}')).toBe(false);
  });

  it('should return false for try-finally with empty finally block', () => {
    expect(noEmpty('try { bar(); } finally {}')).toBe(false);
  });

  it('should return false for if-else with empty else block', () => {
    expect(noEmpty('if (foo) { bar(); } else {}')).toBe(false);
  });

  it('should return true for non-empty do-while statement', () => {
    expect(noEmpty('do { foo(); } while (bar);')).toBe(true);
  });

  it('should return true for non-empty class declaration', () => {
    expect(noEmpty('class Foo { constructor() { this.bar = "baz"; } }')).toBe(
      true
    );
  });

  it('should return true for non-empty catch with a comment', () => {
    expect(noEmpty('try { foo(); } catch (ex) { /* do nothing */ }')).toBe(
      true
    );
  });

  // Tests for invalid cases
  it('should return false for empty do-while statement', () => {
    expect(noEmpty('do {} while (bar);')).toBe(false);
  });

  it('should return false for empty class declaration', () => {
    expect(noEmpty('class Foo {}')).toBe(false);
  });

  it('should return false for if-elseif-else chain with empty elseif block', () => {
    expect(
      noEmpty('if (foo) { bar(); } else if (baz) {} else { qux(); }')
    ).toBe(false);
  });
});
