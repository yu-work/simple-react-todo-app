import React, { useState } from 'react';
import './TodoForm.css';

function TodoForm({ onSubmit }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSubmit(input.trim());
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="新しいタスクを入力してください..."
        className="todo-input"
      />
      <button type="submit" className="add-button">
        ➕ 追加
      </button>
    </form>
  );
}

export default TodoForm;