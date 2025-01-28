import React, { useState } from 'react';
import './TodoForm.css'; // Estilos para el formulario

function TodoForm({ onAddTask, categories, onAddCategory }) {
  const [taskText, setTaskText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isCreatingCategory, setIsCreatingCategory] = useState(false); // Controla si el usuario está creando una categoría
  const [newCategory, setNewCategory] = useState(''); // Almacena el texto de la nueva categoría

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim() || !selectedCategory.trim()) return;

    onAddTask(taskText, selectedCategory); // Pasamos la tarea y la categoría
    setTaskText('');
    setSelectedCategory('');
  };
  const handleCancelCategory = () => {
    setIsCreatingCategory(false);
    setNewCategory('');
  };

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      onAddCategory(newCategory.trim()); // Agrega la nueva categoría
      setSelectedCategory(newCategory.trim()); // Selecciona automáticamente la nueva categoría
      setNewCategory(''); // Limpia el campo de la nueva categoría
      setIsCreatingCategory(false); // Salimos del modo de creación
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {/* Campo para la nueva tarea */}
      <input
        type="text"
        placeholder="Nueva tarea"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        className="todo-input"
      />

      {/* Menú desplegable para categorías */}
      <select
        value={selectedCategory}
        onChange={(e) => {
          if (e.target.value === 'new') {
            // Si selecciona "Crear nueva categoría"
            setIsCreatingCategory(true);
          } else {
            setSelectedCategory(e.target.value);
          }
        }}
        className="todo-select"
      >
        <option value="">Selecciona una categoría</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
        <option value="new">+ Crear nueva categoría</option> {/* Nueva opción */}
      </select>

      {/* Campo para crear una nueva categoría */}
      {isCreatingCategory && (
        <div className="new-category-container">
          <input
            type="text"
            placeholder="Nombre de la nueva categoría"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="todo-new-category-input"
          />
          <button
            type="button"
            onClick={handleAddCategory}
            className="todo-add-category-button"
          >
            Crear
          </button>
          <button
            type="button"
            onClick={handleCancelCategory}
            className="todo-cancel-category-button"
          >
            Cancelar
          </button>
          
        </div>
      )}

      {/* Botón para agregar tarea */}
      <button type="submit" className="todo-submit-button">
        Agregar
      </button>
    </form>
  );
}

export default TodoForm;

