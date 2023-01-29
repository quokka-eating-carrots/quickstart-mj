import { useReducer, useState } from "react";
import TodoReducer from "./TodoReducer";
import { TodoActionCreator, TodoItemType } from "./TodoReducer";

let idNow = new Date().getTime();
const initalTodoList: Array<TodoItemType> = [
  { id: idNow, todo: "리액트" },
  { id: idNow, todo: "자바스크립트" },
  { id: idNow, todo: "CSS" },
];

const App05 = () => {
  const [todoList, dispatchTodoList] = useReducer(TodoReducer, initalTodoList);
  const [todo, setTodo] = useState("");
  const addTodo = () => {
    dispatchTodoList(TodoActionCreator.addTodo(todo));
    setTodo("");
  };
  const deleteTodo = (id: number) => {
    dispatchTodoList(TodoActionCreator.deleteTodo(id));
  };
  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button onClick={addTodo}>할 일 추가</button>
      <ul>
        {todoList.map((item) => (
          <li key={item.id}>
            {item.todo} &nbsp;&nbsp;
            <button onClick={() => deleteTodo(item.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App05;
