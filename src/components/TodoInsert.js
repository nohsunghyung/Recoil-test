import React from 'react';

const TodoInsert = ({ onChangeValue, onSubmitForm, value }) => {
  return (
    <div>
      <input type="text" onChange={(e) => onChangeValue(e)} value={value} />
      <button onClick={onSubmitForm}>입력</button>
    </div>
  );
};

export default TodoInsert;
