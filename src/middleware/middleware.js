import React, { useState, useEffect } from 'react';
function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  useEffect(() => {
    fetch('http://localhost:5000/api/todos')
      .then(response => response.json())
      .then(data => setTodos(data));
  }, []);
  const addTodo = () => {
    fetch('http://localhost:5000/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text })
    })
      .then(response => response.json())
      .then(data => {
        setTodos([...todos, data]);
        setText('');
      });
  };
  return (
    <div>
      <h1>Todos</h1>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo._id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;