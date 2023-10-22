import * as acorn from 'acorn';

export default function parseSourceCode(sourceCode: string) {
  return acorn.parse(sourceCode, {
    ecmaVersion: 2020,
    locations: true,
  });
}
