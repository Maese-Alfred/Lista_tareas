import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


function App() {
  // Estado para las tareas
  const [tasks, setTasks] = useState([]);
  // Estado para las categorías
  const [categories, setCategories] = useState(['General']); // 'General' como categoría predeterminada

  // Función para agregar una nueva tarea
  const handleAddTask = (text, category) => {
    const newTask = {
      id: tasks.length + 1,
      text,
      completed: false,
      category,
    };
    setTasks([...tasks, newTask]);
  };

  // Función para agregar una nueva categoría
  const handleAddCategory = (newCategory) => {
    if (!categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
    }
  };

  // Función para alternar el estado de completado de una tarea
  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Función para eliminar una tarea
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app-container">
      <h1>Gestor de Tareas</h1>
      {/* Formulario para añadir tareas */}
      <TodoForm
        onAddTask={handleAddTask}
        categories={categories}
        onAddCategory={handleAddCategory}
      />
      {/* Lista de tareas agrupadas por categoría */}
      <TodoList
        tasks={tasks}
        onToggle={handleToggleTask}
        onDelete={handleDeleteTask}
      />
    </div>
  );
}

export default App;
