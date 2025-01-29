import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm.jsx";
import Header from "./components/Header";
import TaskCalendar from "./components/TaskCalendar";
import "./App.css";
import TaskSummary from "./components/TaskSummary.jsx";

function App() { 
  const [categories, setCategories] = useState(() => {
    const savedCategories = localStorage.getItem("categories");
    return savedCategories ? JSON.parse(savedCategories) : [];
  });

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : {};
  });

  const [activeSections, setActiveSections] = useState(["Tareas"]); 

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);
  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  
  // ✅ Función corregida para alternar secciones activas
  const handleToggleSection = (section) => {
    setActiveSections((prevSections) =>
      prevSections.includes(section)
        ? prevSections.filter((s) => s !== section) // Si está activo, lo quitamos
        : [...prevSections, section] // Si no está activo, lo agregamos
    );
  };

  // ✅ Agregar una nueva categoría
  const handleAddCategory = (category) => {
    if (!categories.includes(category)) {
      setCategories([...categories, category]);
      setTasks({ ...tasks, [category]: [] });
    }
  };

  // ✅ Agregar una nueva tarea
  const handleAddTask = (taskText, category) => {
    setTasks({
      ...tasks,
      [category]: [...tasks[category], { text: taskText, date: null, completed: false }], 
    });
  };

  // ✅ Marcar tarea como completada
  const handleToggleTask = (category, taskIndex) => {
    const updatedTasks = tasks[category].map((task, index) =>
      index === taskIndex ? { ...task, completed: !task.completed } : task
    );
    setTasks({ ...tasks, [category]: updatedTasks });
  };

  // ✅ Eliminar tarea
  const handleDeleteTask = (category, taskIndex) => {
    const updatedTasks = tasks[category].filter((_, index) => index !== taskIndex);
    setTasks({ ...tasks, [category]: updatedTasks });
  };

  // ✅ Asignar fecha a una tarea
  const handleAssignDate = (category, taskIndex, date) => {
    const updatedTasks = tasks[category].map((task, index) =>
      index === taskIndex ? { ...task, date } : task
    );
    setTasks({ ...tasks, [category]: updatedTasks });
  };

  return (
    <div className="App">
      <Header onToggleSection={handleToggleSection} activeSections={activeSections} /> 

      <div className="main">
        {activeSections.map((section) => {
          if (section === "Tareas") {
            return (
              <div key="Tareas">
                <TodoForm
                  onAddTask={handleAddTask}
                  categories={categories}
                  onAddCategory={handleAddCategory}
                />
                <TodoList
                  tasks={tasks}
                  onDeleteTask={handleDeleteTask}
                  onToggle={handleToggleTask} 
                />
              </div>
            );
          } else if (section === "Calendario") {
            return (
              <div key="Calendario">
                <TaskCalendar tasks={tasks} onAssignDate={handleAssignDate} />
              </div>
            );
          } else if (section === "Resumen") {
            return (
              <div key="Resumen">
                <TaskSummary tasks={tasks} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default App;
