import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  tasks: [{ id: 4, task: "Make an app" }],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const task = {
        id: nanoid(),
        task: action.payload,
      };
      state.tasks.push(task);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    editTask: (state, action) => {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    },
  },
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;

export default taskSlice.reducer;
