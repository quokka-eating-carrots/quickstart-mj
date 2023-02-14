import { createReducer } from "@reduxjs/toolkit";
import TodoActionCreator from "./TodoActionCreator";

export type TodoItemType = {
  id: number;
  todo: string;
  desc: string;
  done: boolean;
};

export type TodoStatesType = { todoList: Array<TodoItemType> };

const initailState: TodoStatesType = {
  todoList: [
    {
      id: 1,
      todo: "캐랜 취켓팅",
      desc: "내 자리가 없는 게 말이 되나",
      done: false,
    },
    {
      id: 2,
      todo: "스테이씨 테디베어 많관부",
      desc: "귀엽당",
      done: true,
    },
    {
      id: 3,
      todo: "이뿅헌",
      desc: "졸립네용",
      done: false,
    },
    {
      id: 4,
      todo: "불꽃여자되기",
      desc: "내 이름이 뭐야...",
      done: false,
    },
  ],
};

const TodoReducer = createReducer(initailState, (builder) => {
  builder
    .addCase(TodoActionCreator.addTodo, (state, action) => {
      state.todoList.push({
        id: new Date().getTime(),
        todo: action.payload.todo,
        desc: action.payload.desc,
        done: false,
      });
    })
    .addCase(TodoActionCreator.deleteTodo, (state, action) => {
      let index = state.todoList.findIndex(
        (item) => item.id === action.payload.id
      );
      state.todoList.splice(index, 1);
    })
    .addCase(TodoActionCreator.toggleTodo, (state, action) => {
      let index = state.todoList.findIndex(
        (item) => item.id === action.payload.id
      );
      state.todoList[index].done = !state.todoList[index].done;
    })
    .addCase(TodoActionCreator.updateTodo, (state, action) => {
      let index = state.todoList.findIndex(
        (item) => item.id === action.payload.id
      );
      state.todoList[index] = { ...action.payload };
    })
    .addDefaultCase((state, action) => state);
});

export default TodoReducer;
