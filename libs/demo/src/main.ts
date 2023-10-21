import { ancestor } from 'acorn-walk';
import { parseSourceCode } from './parse';
import print from './print';
import VariableStore from './models/VariableStore';
import FunctionLogger from './models/FunctionLogger';

export default function main(sourceCode: string) {
  const store = new VariableStore();

  function VariableDeclaration(node) {
    const line = node.loc.start.line;
    const id = node.declarations[0].id;

    if (id.type === 'ObjectPattern') {
      id.properties.forEach((property) => {
        store.add({
          name: property.value.name,
          line: property.value.loc.start.line,
        });
      });
    } else if (id.type === 'Identifier') {
      const name = id.name;

      store.add({ line, name });
    }
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
  function MemberExpression(node) {
    const name = node.object.name;
    if (store.exists(name)) {
      store.remove(name);
    }
  }
  function CallExpression(node, ancestors) {
    const arrowFunctionExpression = ancestors.find(
      ({ type }) => type === 'ArrowFunctionExpression'
    );
    if (arrowFunctionExpression) {
      arrowFunctionExpression.params.forEach((param) => {
        store.add({
          name: param.name,
          line: param.loc.start.line,
        });
      });
    }

    node.arguments.forEach((argument) => store.remove(argument.name));
  }
  function VariableDeclarator(node) {
    if (node.id.type === 'ObjectPattern') {
      store.remove(node.init.name);
    }
  }
  // function FunctionDeclaration(node) {}

  const variableDeclarationLogger = new FunctionLogger(VariableDeclaration);
  // const functionDeclarationLogger = new FunctionLogger(FunctionDeclaration);
  const binaryExpressionLogger = new FunctionLogger(BinaryExpression);
  const memberExpressionLogger = new FunctionLogger(MemberExpression);
  const callExpressionLogger = new FunctionLogger(CallExpression);
  const variableDeclaratorLogger = new FunctionLogger(VariableDeclarator);

  const visitors = {
    VariableDeclaration: (node) => variableDeclarationLogger.invoke([node]),
    // FunctionDeclaration: (node, ancestors) =>
    //   functionDeclarationLogger.invoke([node, ancestors]),
    BinaryExpression: (node, ancestors) =>
      binaryExpressionLogger.invoke([node, ancestors]),
    MemberExpression: (node) => memberExpressionLogger.invoke([node]),
    CallExpression: (node, ancestors) =>
      callExpressionLogger.invoke([node, ancestors]),
    VariableDeclarator: (node) => variableDeclaratorLogger.invoke([node]),
  };

  ancestor(parseSourceCode(sourceCode), visitors);

  return print(store.getVariables());
}
