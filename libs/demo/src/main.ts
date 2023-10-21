import { simple } from 'acorn-walk';
import { parseSourceCode } from './parse';
import print from './print';
import VariableStore from './models/VariableStore';
import FunctionLogger from './models/FunctionLogger';

export default function main(sourceCode: string) {
  const store = new VariableStore();

  function VariableDeclaration(node) {
    const line = node.loc.start.line;
    const name = node.declarations[0].id.name;

    store.add({ line, name });
  }
  function BinaryExpression(node) {
    if (!store.isEmpty()) {
      [node.left.name, node.right.name].forEach((nameIdentifier) => {
        store.remove(nameIdentifier);
      });
    }
  }

  const variableDeclarationLogger = new FunctionLogger(VariableDeclaration);
  const binaryExpressionLogger = new FunctionLogger(BinaryExpression);

  const visitors = {
    VariableDeclaration: (n) => variableDeclarationLogger.invoke(n),
    BinaryExpression: (n) => binaryExpressionLogger.invoke(n),
  };

  simple(parseSourceCode(sourceCode), visitors);

  return print(store.getVariables());
}
