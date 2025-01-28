import React from 'react';
import './TodoList.css';
import TodoItem from './ToDoItem.jsx';

function TodoList({ tasks, onDeleteTask,onToggle }) {
  return (
    <div className="todo-list">
      {Object.entries(tasks).map(([category, tasksInCategory]) => (
        <div key={category} className="category-container">
          <h2 className="category-title">{category}</h2>
          <ul className="task-list">
            {tasksInCategory.map((task, index) => (
             <TodoItem
             key={index}
             task={task}
             onToggle={() => onToggle(category, index)} // Pasar índice para identificar la tarea
             onDelete={() => onDeleteTask(category, index)}
           />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}




export default TodoList;