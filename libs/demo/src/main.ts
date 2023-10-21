import { simple } from 'acorn-walk';
import { parseSourceCode } from './parse';
import print from './print';
import VariableStore from './models/VariableStore';

export default function main(sourceCode: string) {
  const store = new VariableStore();

  const visitors = {
    VariableDeclaration(node) {
      const line = node.loc.start.line;
      const name = node.declarations[0].id.name;

      store.add({ line, name });
    },
    BinaryExpression(node) {
      if (!store.isEmpty()) {
        [node.left.name, node.right.name].forEach((nameIdentifier) => {
          store.remove(nameIdentifier);
        });
      }
    },
  };

  simple(parseSourceCode(sourceCode), visitors);

  return print(store.getVariables());
}
