import React from 'react';

const TodoItem = ({ todoItem, onDelete }) => {
  return (
    <li key={todoItem.id}>
      {todoItem.id}
      {todoItem.value}
      <button onClick={() => onDelete(todoItem.id)}>삭제</button>
    </li>
  );
};

export default TodoItem;
