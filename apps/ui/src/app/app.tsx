import { useState } from 'react';
import { transformFunctionDeclaration } from '../api/api';

export default function App() {
  const [code, setCode] = useState(`function sum(a, b) {
    return a + b;
  }`);

  const click = () => {
    transformFunctionDeclaration({ code }).then((data) => setCode(data.code));
  };

  return (
    <div>
      <button onClick={click}>Button</button>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}
