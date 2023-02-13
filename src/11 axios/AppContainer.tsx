import React, { useState, useEffect } from "react";
import App from "./App";
import produce from "immer";
import axios from "axios";

export type TodoItemType = {
  id: number;
  todo: string;
  desc: string;
  done: boolean;
};
export type StatesType = {
  todoList: Array<TodoItemType>;
  isLoading: boolean;
};
export type CallbacksType = {
  fetchTodoList: () => void;
  addTodo: (todo: string, desc: string, callback: () => void) => void;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  updateTodo: (
    id: number,
    todo: string,
    desc: string,
    done: boolean,
    callback: () => void
  ) => void;
};

const USER = "gdhong";
const BASEURI = "/api/todolist_long/" + USER;

const AppContainer = () => {
  const [todoList, setTodoList] = useState<Array<TodoItemType>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchTodoList();
  }, []);

  const fetchTodoList = async () => {
    setTodoList([]);
    setIsLoading(true);
    try {
      const response = await axios.get(BASEURI);
      setTodoList(response.data);
    } catch (error) {
      if (error instanceof Error) alert("조회 실패 :" + error.message);
      else alert("조회 실패:" + error);
    }
    setIsLoading(false);
  };

  const addTodo = async (todo: string, desc: string, callback: () => void) => {
    setIsLoading(true);
    try {
      const response = await axios.post(BASEURI, { todo, desc });
      if (response.data.status === "success") {
        let newTodoList = produce(todoList, (draft) => {
          draft.push({ ...response.data.item, done: false });
        });
        setTodoList(newTodoList);
        callback();
      } else {
        alert("할 일 추가 실패: " + response.data.message);
      }
    } catch (error) {
      if (error instanceof Error) alert("할 일 추가 실패: " + error.message);
      else alert("할 일 추가 실패: " + error);
    }
    setIsLoading(false);
  };

  const deleteTodo = async (id: number) => {
    try {
      const response = await axios.delete(`${BASEURI}/${id}`);
      if (response.data.status === "success") {
        let index = todoList.findIndex((todo) => todo.id === id);
        let newTodoList = produce(todoList, (draft) => {
          draft.splice(index, 1);
        });
        setTodoList(newTodoList);
      } else {
        alert("할 일 삭제 실패: " + response.data.message);
      }
    } catch (error) {
      if (error instanceof Error) alert("할 일 삭제 실패: " + error.message);
      else alert("할 일 삭제 실패: " + error);
    }
  };

  const toggleTodo = async (id: number) => {
    try {
      let todoItem = todoList.find((todo) => todo.id === id);
      const response = await axios.put(`${BASEURI}/${id}`, {
        ...todoItem,
        done: !todoItem?.done,
      });
      if (response.data.status === "success") {
        let index = todoList.findIndex((todo) => todo.id === id);
        let newTodoList = produce(todoList, (draft) => {
          draft[index].done = !draft[index].done;
        });
        setTodoList(newTodoList);
      } else {
        alert("완료 토글 실패: " + response.data.message);
      }
    } catch (error) {
      if (error instanceof Error) alert("완료 토글 실패: " + error.message);
      else alert("완료 토글 실패: " + error);
    }
  };

  const updateTodo = async (
    id: number,
    todo: string,
    desc: string,
    done: boolean,
    callback: () => void
  ) => {
    try {
      const response = await axios.put(`${BASEURI}/${id}`, {
        todo,
        desc,
        done,
      });
      if (response.data.status === "success") {
        let index = todoList.findIndex((todo) => todo.id === id);
        let newTodoList = produce(todoList, (draft) => {
          draft[index] = { ...draft[index], todo, desc, done };
        });
        setTodoList(newTodoList);
        callback();
      } else {
        alert("할 일 수정 실패: " + response.data.message);
      }
    } catch (error) {
      if (error instanceof Error) alert("할 일 수정 실패: " + error.message);
      else alert("할 일 수정 실패: " + error);
    }
  };

  const callbacks: CallbacksType = {
    fetchTodoList,
    addTodo,
    deleteTodo,
    updateTodo,
    toggleTodo,
  };
  const states: StatesType = { todoList, isLoading };
  return <App callbacks={callbacks} states={states} />;
};

export default AppContainer;
