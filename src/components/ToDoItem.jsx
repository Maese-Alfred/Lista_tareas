import React from 'react';
import './TodoItem.css'; 

function TodoItem({ task, onToggle, onDelete }) {
  return (
    <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <span className="task-text">{task.text}</span>
      <div className="actions">
        <button 
          className="complete-button" 
          onClick={onToggle} // No es necesario pasar el id
        >
          {task.completed ? 'Desmarcar' : 'Completar'}
        </button>
        <button 
          className="delete-button" 
          onClick={onDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}


export default TodoItem;

