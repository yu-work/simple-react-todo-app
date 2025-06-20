import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return (
      <div className="todo-list empty">
        <p>🎉 すべてのタスクが完了しました！</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem 
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TodoList;