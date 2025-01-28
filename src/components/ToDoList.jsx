import React from 'react';
import TodoItem from './TodoItem'; // Componente para renderizar cada tarea
import './TodoList.css'; // Archivo de estilos para TodoList

function TodoList({ tasks, categories, onToggle, onDelete, onDeleteCategory }) {
  return (
    <div className="todo-list">
      {/* Itera sobre las categorías para agrupar tareas */}
      {categories.map((category) => (
        <div key={category} className="category-section">
          {/* Encabezado de la categoría */}
          <div className="category-header">
            <h2>{category}</h2>
            <button
              className="delete-category-button"
              onClick={() => onDeleteCategory(category)}
            >
              Eliminar categoría
            </button>
          </div>

          {/* Lista de tareas filtradas por categoría */}
          <div className="category-tasks">
            {tasks
              .filter((task) => task.category === category)
              .map((task) => (
                <TodoItem
                  key={task.id}
                  task={task}
                  onToggle={onToggle}
                  onDelete={onDelete}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
