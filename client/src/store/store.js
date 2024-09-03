import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todo";
import allTodos from "./slices/allTodos";

const store = configureStore({
  reducer: {
    todo: todoSlice,
    allTodos: allTodos,
  },
});

export default store;
