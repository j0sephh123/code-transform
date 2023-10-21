import { simple } from 'acorn-walk';
import { parseSourceCode } from './parse';
import { store } from './store';
import print from './print';

const sourceCode = `const a = 1;
let b = 2;
var c = 3;
`;

const visitors = {
  VariableDeclaration(node) {
    const line = node.loc.start.line;
    const name = node.declarations[0].id.name;

    store.variables.push({
      line,
      name,
    });
  },
  FunctionDeclaration(node) {
    // simple(node, {
    //   Identifier(innerNode: any) {
    //     console.log('simple', innerNode);
    //   },
    // });
    // ancestor(node, {
    //   Identifier(innerNode: any) {
    //     console.log('ancestor', innerNode);
    //   },
    // });
  },
};

simple(parseSourceCode(sourceCode), visitors);

console.log(print(store.variables));
