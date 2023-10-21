# Goal

Learn how to traverse and transform AST.

## Tools

- [acorn](https://github.com/acornjs/acorn) - parse
- acorn-walk - traverse (still part of acorn package)
- [astring](https://github.com/davidbonnet/astring) - generate
- [estree spec](https://web.archive.org/web/20210314002546/https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/Parser_API)
- [ast explorer](https://astexplorer.net/)

## Exercises

Certainly. Given your interest in improving as a developer, working with Abstract Syntax Trees (AST) could offer valuable insights into language parsing and code manipulation.

### Exercise: Create a Code Linter for Detecting Unused Variables

#### Objective:

Develop a basic code linter that analyzes a JavaScript source file to identify and report any unused variables.

#### Requirements:

1. Parse the JavaScript source code into an Abstract Syntax Tree.
2. Traverse the AST to identify variable declarations.
3. Track references to each declared variable.
4. Identify variables that are declared but not used.
5. Generate a report listing the unused variables along with their line numbers.

### Sample 1: Simple Variable Declarations [x]

```javascript
const a = 1;
let b = 2;
var c = 3;
```

Expected Output:

```
Unused Variables:
- a (Line: 1)
- b (Line: 2)
- c (Line: 3)
```

### Sample 2: Using Some Variables

```javascript
const x = 10;
let y = 20;
var z = 30;
const sum = x + y;
```

Expected Output:

```
Unused Variables:
- z (Line: 3)
- sum (Line: 4)
```

### Sample 3: Functions and Unused Parameters

```javascript
function multiply(a, b) {
  return a * 2;
}
```

Expected Output:

```
Unused Variables:
- b (Line: 1)
```

### Sample 4: Used Functions and Variables

```javascript
const greeting = 'Hello';
function sayHello(name) {
  return greeting + ', ' + name;
}
sayHello('John');
```

Expected Output:

```
Unused Variables:
- None
```

### Sample 5: Nested Scopes

```javascript
function outer(x) {
  const y = 10;
  function inner(z) {
    return x + z;
  }
  inner(5);
}
```

Expected Output:

```
Unused Variables:
- y (Line: 2)
```

### Sample 6: Loops and Conditionals

```javascript
for (let i = 0; i < 10; i++) {
  const j = i + 1;
}
const k = 20;
if (k > 10) {
  const l = 30;
}
```

Expected Output:

```
Unused Variables:
- j (Line: 2)
- l (Line: 7)
```

### Sample 7: Callbacks and Higher Order Functions

```javascript
const nums = [1, 2, 3];
nums.forEach((num, index, arr) => {
  console.log(num);
});
```

Expected Output:

```
Unused Variables:
- index (Line: 3)
- arr (Line: 3)
```

### Sample 8: Object Destructuring

```javascript
const person = {
  name: 'Alice',
  age: 30,
};
const { name, age, job } = person;
```

Expected Output:

```
Unused Variables:
- age (Line: 5)
- job (Line: 5)
```

### Sample 9: Array Destructuring

```javascript
const coords = [10, 20];
const [x, y, z] = coords;
```

Expected Output:

```
Unused Variables:
- y (Line: 3)
- z (Line: 3)
```

### Sample 10: Multiple Scenarios

```javascript
const a = 1,
  b = 2,
  c = 3;
function add(d, e) {
  return d;
}
add(a, b);
```

Expected Output:

```
Unused Variables:
- b (Line: 1)
- c (Line: 1)
- e (Line: 2)
```
