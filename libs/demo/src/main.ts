import { ancestor } from 'acorn-walk';
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
  function BinaryExpression(node, ancestors) {
    const functionDeclaration = ancestors.find(
      ({ type }) => type === 'FunctionDeclaration'
    );

    if (functionDeclaration) {
      functionDeclaration.params.forEach(({ name, loc }) => {
        store.add({
          name,
          line: loc.start.line,
        });
      });
    }

    [node.left.name, node.right.name].forEach((nameIdentifier) => {
      store.remove(nameIdentifier);
    });
  }
  // function FunctionDeclaration(node) {}

  const variableDeclarationLogger = new FunctionLogger(VariableDeclaration);
  // const functionDeclarationLogger = new FunctionLogger(FunctionDeclaration);
  const binaryExpressionLogger = new FunctionLogger(BinaryExpression);

  const visitors = {
    VariableDeclaration: (node, ancestors) =>
      variableDeclarationLogger.invoke([node, ancestors]),
    // FunctionDeclaration: (node, ancestors) =>
    //   functionDeclarationLogger.invoke([node, ancestors]),
    BinaryExpression: (node, ancestors) =>
      binaryExpressionLogger.invoke([node, ancestors]),
  };

  ancestor(parseSourceCode(sourceCode), visitors);

  return print(store.getVariables());
}
