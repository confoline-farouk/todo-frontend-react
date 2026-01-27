import React from 'react';
import './TodoItem.css';

function TodoItem({ todo, onToggleComplete, onDelete }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <div className="todo-header">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggleComplete(todo.id, todo.completed)}
            className="todo-checkbox"
          />
          <h3 className="todo-title">{todo.title}</h3>
        </div>
        {todo.description && (
          <p className="todo-description">{todo.description}</p>
        )}
        <div className="todo-meta">
          <span className="todo-date">
            Créé le: {formatDate(todo.created_at)}
          </span>
        </div>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="btn-delete"
        title="Supprimer"
      >
        🗑️
      </button>
    </div>
  );
}

export default TodoItem;
