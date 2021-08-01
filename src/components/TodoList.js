import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../recoil/todo';
import TodoItem from './TodoItem';
import TodoInsert from './TodoInsert';

const TodoList = () => {
  const [inputValue, setValue] = useState('');
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const onChangeValue = (e) => {
    const value = e.target.value;
    setValue(value);
  };
  const onSubmitForm = () => {
    setTodoList((oldList) => [
      ...oldList,
      {
        id: oldList.length ? oldList[oldList.length - 1].id + 1 : 1,
        value: inputValue
      }
    ]);
    setValue('');
  };
  const onDelete = (id) => {
    setTodoList((oldList) => {
      return oldList.filter((item) => item.id !== id);
    });
  };
  return (
    <div>
      <TodoInsert
        onChangeValue={onChangeValue}
        onSubmitForm={onSubmitForm}
        value={inputValue}
      />
      <ul>
        {todoList.map((item) => (
          <TodoItem key={item.id} todoItem={item} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
