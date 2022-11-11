import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, title: "test", completed: true },
    { id: 2, title: "Elma Al", completed: false },
  ],
  error: "",
};

const TodosSlice = createSlice({
  name: "TodosSlice",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    changeCompleted: (state, action) => {
      state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          todo.completed = action.payload.completed;
        }
      });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});

export default TodosSlice.reducer;
export const { addTodo, changeCompleted, removeTodo } = TodosSlice.actions;
