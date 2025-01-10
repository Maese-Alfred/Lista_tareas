import React from 'react';

function TodoItem({ task }) {
  return (
    <div style={itemStyle}>
      <input type="checkbox" checked={task.completed} readOnly />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
    </div>
  );
}

const itemStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '5px',
  borderBottom: '1px solid #ccc',
};

export default TodoItem;