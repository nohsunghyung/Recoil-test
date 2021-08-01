import React from 'react';
import { RecoilRoot } from 'recoil';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div>
      <RecoilRoot>
        <TodoList />
      </RecoilRoot>
    </div>
  );
};

export default App;
