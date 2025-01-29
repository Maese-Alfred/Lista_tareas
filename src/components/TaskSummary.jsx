import React from "react";
import "./TaskSummary.css";

function TaskSummary({ tasks }) {
  const taskWithDates = Object.entries(tasks).flatMap(([category, tasksInCategory]) =>
    tasksInCategory.filter((task) => task.date).map((task) => ({ ...task, category }))
  );

  return (
    <div className="task-summary">
        <h2>Resumen de tareas</h2>
        <ul className="task-summary-list">
        {taskWithDates.map((task) => (
            <li key={task.text} className="task-summary-item">
            <span className="task-summary-text">{task.text}</span>
            <span className="task-summary-category">{task.category}</span>
            <span className="task-summary-date">{task.date}</span>
            </li>
        ))}
        </ul>
    </div>
  );
}

export default TaskSummary;