import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Header from './components/Header';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState(['General']); // 'General' como predeterminada

  // Agregar una nueva tarea
  const handleAddTask = (text, category) => {
    const newTask = {
      id: tasks.length + 1,
      text,
      completed: false,
      category,
    };
    setTasks([...tasks, newTask]);
  };

  // Agregar una nueva categoría
  const handleAddCategory = (newCategory) => {
    if (!categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
    }
  };

  // Alternar el estado de completado de una tarea
  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Eliminar una tarea
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Eliminar una categoría
  const handleDeleteCategory = (categoryToDelete) => {
    // Eliminar la categoría de la lista
    setCategories(categories.filter((cat) => cat !== categoryToDelete));

    // Opcional: Eliminar o reasignar tareas que pertenecen a esa categoría
    setTasks(tasks.filter((task) => task.category !== categoryToDelete));
  };

  return (
    <div className="app-container">
      <div className='sidebar'>
      <Header  />
      </div>
      <div className='main'>
      {/* Formulario para añadir tareas */}
      <TodoForm
        onAddTask={handleAddTask}
        categories={categories}
        onAddCategory={handleAddCategory}
      />
      {/* Lista de tareas */}
      <TodoList
        tasks={tasks}
        categories={categories}
        onToggle={handleToggleTask}
        onDelete={handleDeleteTask}
        onDeleteCategory={handleDeleteCategory} // Nueva prop para eliminar categorías
      />
      </div>
    </div>
  );
}

export default App;
