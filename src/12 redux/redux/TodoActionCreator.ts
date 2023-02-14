import { createAction } from "@reduxjs/toolkit";

const TodoActionCreator = {
  addTodo: createAction<{ todo: string; desc: string }>("addTodo"),
  deleteTodo: createAction<{ id: number }>("deleteTodo"),
  toggleTodo: createAction<{ id: number }>("toggleTodo"),
  updateTodo: createAction<{
    id: number;
    todo: string;
    desc: string;
    done: boolean;
  }>("updateTodo"),
};

export default TodoActionCreator;
