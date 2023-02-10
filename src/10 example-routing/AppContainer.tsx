import React, { useState } from "react";
import App from "./App";
import produce from "immer";

export type TodoItemType = {
  id: number;
  todo: string;
  desc: string;
  done: boolean;
};
export type StatesType = {
  todoList: Array<TodoItemType>;
};
export type CallbacksType = {
  addTodo: (todo: string, desc: string) => void;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  updateTodo: (id: number, todo: string, desc: string, done: boolean) => void;
};

const AppContainer = () => {
  const [todoList, setTodoList] = useState<Array<TodoItemType>>([
    {
      id: 1,
      todo: "캐럿랜드 티켓팅",
      desc: "제 자리 하나만 주실수",
      done: false,
    },
    {
      id: 2,
      todo: "부석순 앨범 사기",
      desc: "나 승관이 포카 가지고 싶다",
      done: false,
    },
    {
      id: 3,
      todo: "스테이씨 컴백",
      desc: "파피파피파피파피",
      done: true,
    },
    {
      id: 4,
      todo: "잊지 말고 농놀 하기",
      desc: "가비지 타임도 읽는 중 🏀",
      done: false,
    },
  ]);

  const addTodo = (todo: string, desc: string) => {
    let newTodoList = produce(todoList, (draft) => {
      draft.push({ id: new Date().getTime(), todo, desc, done: false });
    });
    setTodoList(newTodoList);
  };

  const deleteTodo = (id: number) => {
    let index = todoList.findIndex((todo) => todo.id === id);
    let newTodoList = produce(todoList, (draft) => {
      draft.splice(index, 1);
    });
    setTodoList(newTodoList);
  };

  const toggleTodo = (id: number) => {
    let index = todoList.findIndex((todo) => todo.id === id);
    let newTodoList = produce(todoList, (draft) => {
      draft[index].done = !draft[index].done;
    });
    setTodoList(newTodoList);
  };

  const updateTodo = (
    id: number,
    todo: string,
    desc: string,
    done: boolean
  ) => {
    let index = todoList.findIndex((todo) => todo.id === id);
    let newTodoList = produce(todoList, (draft) => {
      draft[index] = { ...draft[index], todo, desc, done };
    });
    setTodoList(newTodoList);
  };

  const callbacks: CallbacksType = {
    addTodo,
    deleteTodo,
    updateTodo,
    toggleTodo,
  };
  const states: StatesType = { todoList };
  return <App callbacks={callbacks} states={states} />;
};

export default AppContainer;
