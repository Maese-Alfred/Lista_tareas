import React from 'react';
import './ToDoList.css';
import TodoItem from './ToDoItem';

function ToDoList() {
  const tasks = [
    { id: 1, text: 'Aprender React', completed: false },
    { id: 2, text: 'Configurar Git', completed: true },
  ];

  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <div className="todo-item" key={task.id}>
          <TodoItem task={task} />
        </div>
      ))}
    </div>
  );
}

export default ToDoList;