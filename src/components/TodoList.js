import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList({ todos, onToggleComplete, onDelete }) {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <p>🎉 Aucune tâche pour le moment!</p>
        <p className="empty-hint">Ajoutez une nouvelle tâche ci-dessus</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TodoList;
