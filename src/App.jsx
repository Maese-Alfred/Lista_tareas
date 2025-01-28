import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm.jsx";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [categories, setCategories] = useState(["Trabajo", "Personal"]);
  const [tasks, setTasks] = useState({
    Trabajo: [],
    Personal: [],
  });

  // Función para agregar una nueva categoría
  const handleAddCategory = (category) => {
    if (!categories.includes(category)) {
      setCategories([...categories, category]);
      setTasks({ ...tasks, [category]: [] });
    }
  };

  // Función para agregar una nueva tarea
  const handleAddTask = (taskText, category) => {
    const newTask = { text: taskText, completed: false }; // Nueva tarea con estructura adecuada
    setTasks({
      ...tasks,
      [category]: [...tasks[category], newTask],
    });
  };

  const handleToggleTask = (category, taskIndex) => {
    const updatedTasks = tasks[category].map((task, index) =>
      index === taskIndex ? { ...task, completed: !task.completed } : task
    );
    setTasks({
      ...tasks,
      [category]: updatedTasks,
    });
  };

  // Función para eliminar una tarea
  const handleDeleteTask = (category, taskIndex) => {
    const updatedTasks = tasks[category].filter(
      (_, index) => index !== taskIndex
    );
    setTasks({
      ...tasks,
      [category]: updatedTasks,
    });
  };

  return (
    <div className="App">
      <div className="header-container">
        <Header />
      </div>
      <div className="main">
        <TodoForm
          onAddTask={handleAddTask}
          categories={categories}
          onAddCategory={handleAddCategory}
        />
        <TodoList
          tasks={tasks}
          onDeleteTask={handleDeleteTask}
          onToggle={handleToggleTask} // Pasar la lógica de completado
        />
      </div>
    </div>
  );
}

export default App;
