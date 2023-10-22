import noEmptyStaticBlock from './no-empty-static-block';

describe('noEmptyStaticBlock rule', () => {
  // Tests for valid cases
  it('should return true for non-empty static block', () => {
    expect(noEmptyStaticBlock('class Foo { static { bar(); } }')).toBe(true);
  });

  it('should return true for static block with comments', () => {
    expect(noEmptyStaticBlock('class Foo { static { /* comment */ } }')).toBe(
      true
    );
  });

  it('should return true for multiple non-empty static blocks', () => {
    expect(
      noEmptyStaticBlock('class Foo { static { bar(); } static { baz(); } }')
    ).toBe(true);
  });

  it('should return true for nested non-empty constructs', () => {
    expect(
      noEmptyStaticBlock('class Foo { static { if (true) { bar(); } } }')
    ).toBe(true);
  });

  // Tests for invalid cases
  it('should return false for empty static block', () => {
    expect(noEmptyStaticBlock('class Foo { static {} }')).toBe(false);
  });

  it('should return false for static block with spaces', () => {
    expect(noEmptyStaticBlock('class Foo { static {  } }')).toBe(false);
  });

  it('should return false for multiple static blocks with one empty', () => {
    expect(
      noEmptyStaticBlock('class Foo { static { bar(); } static {} }')
    ).toBe(false);
  });

  it('should return false for static block with empty if statement', () => {
    expect(noEmptyStaticBlock('class Foo { static { if (true) {} } }')).toBe(
      false
    );
  });
});
