import { useState } from 'react';
import { transformFunctionDeclaration } from '../api/api';

export default function App() {
  const [input, setInput] = useState(`function sum(a, b) {
  return a + b;
}`);
  const [code, setCode] = useState('');

  const click = () => {
    transformFunctionDeclaration({ code: input }).then((data) =>
      setCode(data.code)
    );
  };

  return (
    <div className="flex">
      <div>
        <div className="flexCol">
          <textarea
            cols={30}
            rows={8}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
          <select>
            <option value="1">Function Declaration to Arrow Function</option>
            <option value="2">Arrow Function to Function Declaration</option>
          </select>
        </div>
        <button onClick={click}>Button</button>
      </div>

      <div>
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
