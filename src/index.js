import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount( count => count + 1)}>Like</button>
    </div>
  )
};

ReactDOM.render(<Counter />, document.getElementById('root'));

