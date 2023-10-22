import transformFunction from './transformFunction';
import * as cases from './cases';
import parseSourceCode from '../parseSourceCode';

describe('transformFunction', () => {
  it.only('should correctly detect an arrow function', () => {
    expect(transformFunction(parseSourceCode(cases.arrowFunction))).toBe(
      'arrow'
    );
  });
  it('should correctly detect a function declaration', () => {
    expect(transformFunction(parseSourceCode(cases.functionDeclaration))).toBe(
      'functionDeclaration'
    );
  });
  it('should correctly detect when neither of the two', () => {
    expect(transformFunction(parseSourceCode(cases.none))).toBe('none');
  });
  it('should correctly detect if both are present', () => {
    expect(transformFunction(parseSourceCode(cases.both))).toBe('both');
  });
});
