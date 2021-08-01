import React from 'react';

const TodoInsert = ({ onChangeValue, onSubmitForm }) => {
  return (
    <div>
      <input type="text" onChange={(e) => onChangeValue(e)} />
      <button onClick={onSubmitForm}>입력</button>
    </div>
  );
};

export default TodoInsert;
