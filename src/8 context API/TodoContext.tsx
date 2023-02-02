import React, { useState } from "react";
import produce from "immer";

export type TodoListItemType = {
  no: number;
  todo: string;
  done: boolean;
};

// Provider로 전달한 데이터의 타입 정의
export type TodoListContextValueType = {
  state: { todoList: Array<TodoListItemType> };
  actions: {
    addTodo: (todo: string) => void;
    deleteTodo: (no: number) => void;
    toggleDone: (no: number) => void;
  };
};

const TodoContext = React.createContext<TodoListContextValueType | null>(null);

type PropsType = {
  children: JSX.Element | JSX.Element[];
};

export const TodoProvider = (props: PropsType) => {
  const [todoList, setTodoList] = useState<Array<TodoListItemType>>([
    { no: 1, todo: "타입 스크립트", done: false },
    { no: 2, todo: "CSS 복습", done: true },
    { no: 3, todo: "필드 패서 관리자 페이지", done: false },
    { no: 4, todo: "노래 듣기", done: true },
  ]);

  const addTodo = (todo: string) => {
    const newTodoList = produce(todoList, (draft: Array<TodoListItemType>) => {
      draft.push({ no: new Date().getTime(), todo: todo, done: false });
    });
    setTodoList(newTodoList);
  };

  const deleteTodo = (no: number) => {
    const index = todoList.findIndex((item) => item.no === no);
    const newTodoList = produce(todoList, (draft: Array<TodoListItemType>) => {
      draft.splice(index, 1);
    });
    setTodoList(newTodoList);
  };

  const toggleDone = (no: number) => {
    const index = todoList.findIndex((item) => item.no === no);
    const newTodoList = produce(todoList, (draft: Array<TodoListItemType>) => {
      draft[index].done = !draft[index].done;
    });
    setTodoList(newTodoList);
  };

  const values: TodoListContextValueType = {
    state: { todoList },
    actions: { addTodo, deleteTodo, toggleDone },
  };

  return (
    <TodoContext.Provider value={values}>{props.children}</TodoContext.Provider>
  );
};

export default TodoContext;
