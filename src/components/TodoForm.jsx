import React, { useState } from 'react';
import './TodoForm.css'; // Estilos para el formulario

function TodoForm({ onAddTask, categories, onAddCategory }) {
  const [taskText, setTaskText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim() || !selectedCategory.trim()) return;

    onAddTask(taskText, selectedCategory); // Pasamos la tarea y la categoría
    setTaskText('');
    setSelectedCategory('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        className="todo-input"
      />
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="todo-select"
      >
        <option value="">Selecciona una categoría</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Nueva categoría"
        onBlur={(e) => {
          if (e.target.value.trim()) {
            onAddCategory(e.target.value.trim());
            setSelectedCategory(e.target.value.trim());
          }
        }}
        className="todo-new-category"
      />
      <button type="submit" className="todo-submit-button">
        Agregar
      </button>
    </form>
  );
}

export default TodoForm;
