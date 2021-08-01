import { atom } from 'recoil';

export const counterState = atom({
  key: 'counterState',
  default: 0
});

export const todoListState = atom({
  key: 'todoListState',
  default: [
    { id: 1, value: '할일1' },
    { id: 2, value: '할일2' }
  ]
});

export const onSubmitForm = atom({});
