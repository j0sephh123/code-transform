import detectFunction from './detect-function';
import * as cases from './cases';
import parseSourceCode from '../parseSourceCode';

describe('detect-function', () => {
  it('should correctly detect an arrow function', () => {
    expect(detectFunction(parseSourceCode(cases.arrowFunction))).toBe('arrow');
  });
  it('should correctly detect a function declaration', () => {
    expect(detectFunction(parseSourceCode(cases.functionDeclaration))).toBe(
      'functionDeclaration'
    );
  });
  it('should correctly detect when neither of the two', () => {
    expect(detectFunction(parseSourceCode(cases.none))).toBe('none');
  });
  it('should correctly detect if both are present', () => {
    expect(detectFunction(parseSourceCode(cases.both))).toBe('both');
  });
});
