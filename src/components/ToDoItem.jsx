import React from 'react';
import './TodoItem.css'; 

function TodoItem({ task, onToggle, onDelete }) {
  return (
    <div className='todo-content' >
    <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
      {/* Texto de la tarea */}
      <span className="task-text">{task.text}</span>
      {/* Contenedor de botones */}
      <div className="actions">
        {/* Botón para completar/desmarcar */}
        <button 
          className="complete-button" 
          onClick={() => onToggle(task.id)}
        >
          {task.completed ? 'Desmarcar' : 'Completar'}
        </button>

        {/* Botón para eliminar */}
        <button 
          className="delete-button" 
          onClick={() => onDelete(task.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
    </div>
  );
}

export default TodoItem;

