// Basic structure of an AST Node
export interface NodeBase {
  type: string;
  start: number;
  end: number;
}

// Type for Identifier Node
export interface IdentifierNode extends NodeBase {
  type: 'Identifier';
  name: string;
}

// Type for FunctionDeclaration Node
export interface FunctionDeclarationNode extends NodeBase {
  type: 'FunctionDeclaration';
  id: IdentifierNode;
  params: IdentifierNode[];
  body: BlockStatementNode; // or you could use NodeBase if you don't need to be specific
}

// Type for BlockStatement Node
export interface BlockStatementNode extends NodeBase {
  type: 'BlockStatement';
  body: NodeBase[]; // Array of different kinds of nodes, e.g., ReturnStatementNode
}
