import arrowFunction from './transform-function/arrowFunction';
import parseSourceCode from './parseSourceCode';

export const transformToArrowFunction = (code: string) =>
  arrowFunction(parseSourceCode(code));
