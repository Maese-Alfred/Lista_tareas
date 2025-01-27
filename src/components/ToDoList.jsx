import React, { useState } from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';

function TodoList({ tasks, onToggle, onDelete }) {
  const groupedTasks = tasks.reduce((groups, task) => {
    (groups[task.category] = groups[task.category] || []).push(task);
    return groups;
  }, {});

  const [newTaskText, setNewTaskText] = useState(''); // Estado para el texto del input

  // Función para agregar una nueva tarea
  const addTask = (e) => {
    e.preventDefault(); // Evita que la página se recargue al enviar el formulario

    if (newTaskText.trim() === '') {
      alert('Por favor, escribe una tarea válida');
      return;
    }

    const newTask = { id: Date.now(), text: newTaskText, completed: false };
    setTasks([...tasks, newTask]); // Agrega la nueva tarea a la lista
    setNewTaskText(''); // Limpia el campo de texto
  };

  // Función para marcar como completada una tarea
  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Función para eliminar una tarea
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="todo-list">
      {Object.keys(groupedTasks).map((category) => (
        <div key={category} className="category-group">
          <h2>{category}</h2>
          {groupedTasks[category].map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default TodoList;