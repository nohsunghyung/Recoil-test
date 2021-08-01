import React from 'react';

const TodoItem = ({ todoItem }) => {
  return <li key={todoItem.id}>{todoItem.value}</li>;
};

export default TodoItem;
