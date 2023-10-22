import * as acorn from 'acorn';

export function parseSourceCode(sourceCode: string) {
  return acorn.parse(sourceCode, {
    ecmaVersion: 2020,
    locations: true,
  });
}
