import { ancestor, simple } from 'acorn-walk';
import parseSourceCode from '../parseSourceCode';
import print from './print';
import VariableStore from './models/VariableStore';
import FunctionLogger from '../FunctionLogger';

export default function main(sourceCode: string) {
  const store = new VariableStore();

  function BinaryExpression(node) {
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

    store.remove(node.callee.name);
    node.arguments.forEach((argument) => store.remove(argument.name));
  }
  function VariableDeclarator(node) {
    const { type } = node.id;

    if (type === 'ObjectPattern') {
      store.remove(node.init.name);

      node.id.properties.forEach((property) => {
        store.add({
          name: property.value.name,
          line: property.value.loc.start.line,
        });
      });
    } else if (type === 'ArrayPattern') {
      store.remove(node.init.name);
      node.id.elements.forEach(({ name, loc }) => {
        store.add({
          name,
          line: loc.start.line,
        });
      });
    } else if (type === 'Identifier') {
      const line = node.loc.start.line;
      const name = node.id.name;

      store.add({ line, name });
    }
  }
  function FunctionDeclaration(node, ancestors) {
    // function
    store.add({
      name: node.id.name,
      line: node.id.loc.start.line,
    });

    // parameters
    node.params.forEach((param) => {
      store.add({
        name: param.name,
        line: param.loc.start.line,
      });
    });

    simple(node, {
      BinaryExpression(innerNode: any) {
        [innerNode.left.name, innerNode.right.name].forEach(
          (nameIdentifier) => {
            store.remove(nameIdentifier);
          }
        );
      },
      ReturnStatement(innerNode: any) {
        store.remove(innerNode.argument.name);
      },
    });

    // TODO check for binary expressions and return types here instead of
    // BinaryExpression or ReturnStatement
  }
  function ClassDeclaration(node) {
    store.add({
      name: node.id.name,
      line: node.id.loc.start.line,
    });
  }
  function ForOfStatement(node) {
    store.remove(node.right.name);
  }
  function SpreadElement(node) {
    store.remove(node.argument.name);
  }

  // const variableDeclarationLogger = new FunctionLogger(VariableDeclaration);
  const functionDeclarationLogger = new FunctionLogger(FunctionDeclaration);
  const binaryExpressionLogger = new FunctionLogger(BinaryExpression);
  const memberExpressionLogger = new FunctionLogger(MemberExpression);
  const callExpressionLogger = new FunctionLogger(CallExpression);
  const variableDeclaratorLogger = new FunctionLogger(VariableDeclarator);
  const classDeclarationLogger = new FunctionLogger(ClassDeclaration);
  const forOfStatementLogger = new FunctionLogger(ForOfStatement);
  const spreadElementLogger = new FunctionLogger(SpreadElement);

  const visitors = {
    // VariableDeclaration: (node) => variableDeclarationLogger.invoke([node]),
    FunctionDeclaration: (node, ancestors) =>
      functionDeclarationLogger.invoke([node, ancestors]),
    BinaryExpression: (node) => binaryExpressionLogger.invoke([node]),
    MemberExpression: (node) => memberExpressionLogger.invoke([node]),
    CallExpression: (node, ancestors) =>
      callExpressionLogger.invoke([node, ancestors]),
    VariableDeclarator: (node) => variableDeclaratorLogger.invoke([node]),
    ClassDeclaration: (node) => classDeclarationLogger.invoke([node]),
    ForOfStatement: (node) => forOfStatementLogger.invoke([node]),
    SpreadElement: (node) => spreadElementLogger.invoke([node]),
  };

  ancestor(parseSourceCode(sourceCode), visitors);

  return print(store.getVariables());
}
