import React, { useState } from "react";
import "./TaskCalendar.css";

function TaskCalendar({ tasks, onAssignDate }) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTaskIndex, setSelectedTaskIndex] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleAssignDate = () => {
    if (selectedCategory && selectedTaskIndex !== '' && selectedDate) {
      onAssignDate(selectedCategory, Number(selectedTaskIndex), selectedDate);
      setSelectedCategory('');
      setSelectedTaskIndex('');
      setSelectedDate('');
    }
  };

  return (
    <div className="calendar-container">
      <h2>Calendario de Tareas</h2>
      <div className="task-calendar-content">

      <select value={selectedCategory} className="select_category" onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">Selecciona una categoría</option>
        {Object.keys(tasks).map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {selectedCategory && (
        <select value={selectedTaskIndex} className="select_task" onChange={(e) => setSelectedTaskIndex(e.target.value)}>
          <option value="">Selecciona una tarea</option>
          {tasks[selectedCategory].map((task, index) => (
            <option key={index} value={index}>
              {task.text} {/* ✅ Mostrar el nombre real de la tarea */}
            </option>
          ))}
        </select>
      )}

      
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        className="input_date"
      />

      <button onClick={handleAssignDate} className="assing_date" >Asignar Fecha</button>

      <ul className="calendar-list">
        {Object.entries(tasks).map(([category, tasksInCategory]) =>
          tasksInCategory
            .filter(task => task.date !== null) // ✅ Mostrar solo tareas con fecha
            .map((task, index) => (
              <li key={index} className="calendar-item">
                📅 {task.date} - {task.text}  {/* ✅ Mostrar el nombre de la tarea */}
              </li>
            ))
        )}
      </ul>
      </div>
    </div>
  );
}

export default TaskCalendar;
