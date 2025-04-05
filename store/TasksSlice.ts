import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  'To Do': [
    { id: '1', title: 'Пример задачи', description: 'Описание задачи...' },
  ],
  'In Progress': [],
  'Done': [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    moveTask: (state, action) => {
      const { taskId, fromColumn, toColumn, newIndex } = action.payload;
      const task = state[fromColumn].find((t) => t.id === taskId);
      state[fromColumn] = state[fromColumn].filter((t) => t.id !== taskId);
      state[toColumn].splice(newIndex, 0, task);
    },
  },
});

export const { moveTask } = tasksSlice.actions;
export default tasksSlice.reducer;