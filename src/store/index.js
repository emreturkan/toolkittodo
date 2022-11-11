import { configureStore } from "@reduxjs/toolkit";
import TodosSlice from "./TodosSlice";
const store = configureStore({
  reducer: {
    TodosSlice,
  },
});

export default store;
