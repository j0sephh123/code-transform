import { generate } from 'astring';

const json = {
  type: 'Program',
  body: [
    {
      type: 'FunctionDeclaration',
      id: {
        type: 'Identifier',
        name: 'sum',
      },
      params: [
        {
          type: 'Identifier',
          name: 'a',
        },
        {
          type: 'Identifier',
          name: 'b',
        },
      ],
      body: {
        type: 'BlockStatement',
        body: [
          {
            type: 'ReturnStatement',
            argument: {
              type: 'BinaryExpression',
              left: {
                type: 'Identifier',
                name: 'a',
              },
              operator: '+',
              right: {
                type: 'Identifier',
                name: 'b',
              },
            },
          },
        ],
      },
    },
  ],
};

const r = generate(json);
console.log(r);
