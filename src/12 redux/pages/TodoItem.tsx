import { useNavigate } from "react-router-dom";
import { TodoItemType } from "../redux/TodoReducer";

type PropsType = {
  todoItem: TodoItemType;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
};

const TodoItem = ({ todoItem, deleteTodo, toggleTodo }: PropsType) => {
  const navigate = useNavigate();
  let itemClassName = "list-group-item";
  if (todoItem.done) itemClassName += " list-group-item-success";
  return (
    <li className={itemClassName}>
      <span
        className={todoItem.done ? "todo-done pointer" : "pointer"}
        onClick={() => toggleTodo(todoItem.id)}
      >
        {todoItem.todo}
        {todoItem.done ? "(완료)" : ""}
      </span>
      <span
        className="float-end badge bg-secondary pointer m-1"
        onClick={() => navigate("/todos/edit/" + todoItem.id)}
      >
        편집
      </span>
      <span
        className="floate-end badge bg-secondary pointer m-1"
        onClick={() => deleteTodo(todoItem.id)}
      >
        삭제
      </span>
    </li>
  );
};

export default TodoItem;
