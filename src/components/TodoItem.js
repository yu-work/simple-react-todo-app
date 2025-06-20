import React from 'react';
import './TodoItem.css';

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="todo-checkbox"
      />
      <span className="todo-text">{todo.text}</span>
      <button 
        onClick={() => onDelete(todo.id)}
        className="delete-button"
        aria-label="削除"
      >
        🗑️
      </button>
    </div>
  );
}

export default TodoItem;