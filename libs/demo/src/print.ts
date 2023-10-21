import type { Store } from './models/VariableStore';

export default function print(input: Store['variables']) {
  if (input.length === 0) {
    return `Unused Variables:
- None`;
  }
  return `Unused Variables:
${input.map(({ line, name }) => `- ${name} (Line: ${line})`).join('\n')}`;
}
