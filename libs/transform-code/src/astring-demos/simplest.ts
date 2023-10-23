import { generate } from 'astring';

const json = {
  type: 'Program',
  body: [
    {
      type: 'VariableDeclaration',
      declarations: [
        {
          type: 'VariableDeclarator',
          id: {
            type: 'Identifier',
            name: 'a',
          },
          init: null,
        },
      ],
      kind: 'let',
    },
  ],
};

const r = generate(json);
console.log(r);
