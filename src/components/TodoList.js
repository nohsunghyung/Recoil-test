import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { counterState, todoListState } from '../recoil/todo';
import TodoItem from './TodoItem';
import TodoInsert from './TodoInsert';

const TodoList = () => {
  const [counter, setCounter] = useRecoilState(counterState);
  const todoList = useRecoilValue(todoListState);
  const onChangeValue = (e) => {
    const value = e.target.value;
    console.log(value);
  };
  const onSubmitForm = () => {
    console.log('입력');
  };
  const onChangeCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <button onClick={onChangeCounter}>카운터</button>
      <div>{counter}</div>
      <TodoInsert onChangeValue={onChangeValue} onSubmitForm={onSubmitForm} />
      <ul>
        {todoList.map((item) => (
          <TodoItem key={item.id} todoItem={item} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
