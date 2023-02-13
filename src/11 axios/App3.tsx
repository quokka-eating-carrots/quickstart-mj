import React from "react";
import axios from "axios";

type TodoType = { id: number; todo: string; done: boolean; desc: string };

const listUrl = "/api/todolist_long/gdhong";
const todoUrlPrefix = "/api/todoList_long/gdhong/";

const requestAPI = () => {
  let todoList: Array<TodoType> = [];
  axios
    .get(listUrl)
    .then((res) => {
      todoList = res.data;
      console.log(`# TodoList: ${todoList}`);
      return todoList[0].id;
    })
    .then((id) => axios.get(todoUrlPrefix + id))
    .then((res) => {
      console.log(`## 첫 번째 Todo: ${res.data}`);
      return todoList[1].id;
    })
    .then((id) => {
      axios.get(todoUrlPrefix + id).then((res) => {
        console.log(`## 두 번째 Todo: ${res.data}`);
      });
    });
};

requestAPI();

type Props = {};

const App = (props: Props) => {
  return <div>App</div>;
};

export default App;
