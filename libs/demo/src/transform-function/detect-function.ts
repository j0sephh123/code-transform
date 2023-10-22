import { simple } from 'acorn-walk';
import acorn = require('acorn');

type DetectFunctionReturnType =
  | 'arrow'
  | 'functionDeclaration'
  | 'none'
  | 'both';

export default function detectFunction(
  ast: acorn.Node
): DetectFunctionReturnType {
  const state = {
    isArrow: false,
    isFunctionDeclaration: false,
  };
  simple(ast, {
    FunctionDeclaration() {
      state.isFunctionDeclaration = true;
    },
    ArrowFunctionExpression() {
      state.isArrow = true;
    },
  });

  if (!state.isArrow && !state.isFunctionDeclaration) {
    return 'none';
  }
  if (state.isArrow && state.isFunctionDeclaration) {
    return 'both';
  }

  if (state.isFunctionDeclaration) {
    return 'functionDeclaration';
  }

  return 'arrow';
}
