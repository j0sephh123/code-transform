# Goal

Learn how to traverse and transform AST.

## Tools

- acorn - parse
- acorn-walk - traverse (still part of acorn package)
- astring - generate
- [estree spec](https://web.archive.org/web/20210314002546/https://developer.mozilla. org/en-US/docs/Mozilla/Projects/SpiderMonkey/Parser_API)
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
