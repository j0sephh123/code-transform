import { simple } from 'acorn-walk';
import detectFunction from './detect-function';

export default function transformFunction(ast: acorn.Node) {
  const type = detectFunction(ast);

  if (type === 'both' || type === 'none') {
    throw new Error('invalid input');
  }

  simple(ast, {
    FunctionDeclaration() {
      if (type === 'arrow') return;

      console.log('fuck');
    },
    ArrowFunctionExpression() {
      if (type === 'functionDeclaration') return;
    },
  });
}
