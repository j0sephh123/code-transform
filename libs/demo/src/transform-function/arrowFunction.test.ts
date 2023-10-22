import arrowFunction from './arrowFunction';
import * as cases from './cases';
import parseSourceCode from '../parseSourceCode';

describe('arrowFunction', () => {
  it('function declaration -> arrow function', () => {
    expect(arrowFunction(parseSourceCode(cases.functionDeclaration))).toBe(
      cases.arrowFunction
    );
  });
});
