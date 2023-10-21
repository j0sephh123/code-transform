import { Store } from './store';

export default function print(input: Store['variables']) {
  return `Unused Variables:
${input.map(({ line, name }) => `- ${name} (Line: ${line})`).join('\n')}`;
}
