import { simple } from 'acorn-walk';
import { generate } from 'astring';

export default function arrowFunction(ast: acorn.Node) {
  const state = {
    name: null,
    params: null,
    body: null,
  };

  const visitors = {
    FunctionDeclaration(node) {
      state.name = node.id.name;
      state.params = node.params;
      state.body = node.body;
    },
  };

  simple(ast, visitors);

  const result = {
    type: 'Program',
    body: [
      {
        type: 'VariableDeclaration',
        kind: 'const',
        declarations: [
          {
            type: 'VariableDeclarator',
            id: {
              type: 'Identifier',
              name: state.name,
            },
            init: {
              type: 'ArrowFunctionExpression',
              params: state.params,
              body: state.body,
            },
          },
        ],
      },
    ],
  };

  const generatedResult = generate(result);

  return generatedResult;
}
