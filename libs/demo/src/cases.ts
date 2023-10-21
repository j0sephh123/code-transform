export const case1 = `const a = 1;
let b = 2;
var c = 3;
`;

export const case2 = `const x = 10;
let y = 20;
var z = 30;
const sum = x + y;
`;

export const case3 = `function multiply(a, b) {
  return a * 2;
}`;

export const case4 = `const greeting = 'Hello';
function sayHello(name) {
  return greeting + ', ' + name;
}
sayHello('John');
`;

export const case5 = `function outer(x) {
  const y = 10;
  function inner(z) {
    return x + z;
  }
  inner(5);
}`;

export const case6 = `for (let i = 0; i < 10; i++) {
  const j = i + 1;
}
const k = 20;
if (k > 10) {
  const l = 30;
}`;

export const case7 = `const nums = [1, 2, 3];
nums.forEach((num, index, arr) => {
  console.log(num);
});
`;

export const case8 = `const person = {
  name: 'Alice',
  age: 30,
};
const { name, age, job } = person;
`;

export const case9 = `const coords = [10, 20];
const [x, y, z] = coords;
`;

export const case10 = `const a = 1,
  b = 2,
  c = 3;
function add(d, e) {
  return d;
}
add(a, b);
`;
