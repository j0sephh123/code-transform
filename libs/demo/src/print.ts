import type { Store } from './models/VariableStore';

export default function print(input: Store['variables']) {
  return `Unused Variables:
${input.map(({ line, name }) => `- ${name} (Line: ${line})`).join('\n')}`;
}
