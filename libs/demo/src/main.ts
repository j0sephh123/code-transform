import { simple } from 'acorn-walk';
import { parseSourceCode } from './parse';
import type { Store } from './store';
import print from './print';

export default function main(sourceCode: string) {
  const store: Store = {
    variables: [],
  };

  const visitors = {
    VariableDeclaration(node) {
      const line = node.loc.start.line;
      const name = node.declarations[0].id.name;

      store.variables.push({
        line,
        name,
      });
    },
  };

  simple(parseSourceCode(sourceCode), visitors);

  return print(store.variables);
}
