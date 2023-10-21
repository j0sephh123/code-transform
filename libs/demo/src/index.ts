import * as acorn from 'acorn';
import { ancestor, simple, fullAncestor } from 'acorn-walk';
import { generate } from 'astring';
import type { FunctionDeclarationNode } from './types';

const sourceCode = `
function add(a, b) {
  return a + b;
}
`;

const ast = acorn.parse(sourceCode, {
  ecmaVersion: 2020,
});

const visitors = {
  FunctionDeclaration(node: FunctionDeclarationNode) {
    console.log(node.id);
    console.log(node.params);
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

simple(ast, visitors);
