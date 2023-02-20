import TodoItem from "./TodoItem";
import TodoActionCreator from "../redux/TodoActionCreator";
import { AnyAction, Dispatch } from "redux";
import { connect } from "react-redux";
import { TodoStatesType, TodoItemType } from "../redux/TodoReducer";
import { useDispatch, useSelector } from "react-redux";
import { RootStatesType } from "../redux/AppStore";

type PropsType = {
  todoList: Array<TodoItemType>;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
};

const TodoList = ({ todoList, deleteTodo, toggleTodo }: PropsType) => {
  let todoItems = todoList.map((item) => {
    return (
      <TodoItem
        key={item.id}
        todoItem={item}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
    );
  });
  return (
    <div>
      <h2>TodoList 정보</h2>
      <ul className="todos">{todoItems}</ul>
    </div>
  );
};

const TodoListContainer = () => {
  const dispatch = useDispatch();

  const todoList = useSelector((state: RootStatesType) => state.todos.todoList);
  const deleteTodo = (id: number) =>
    dispatch(TodoActionCreator.deleteTodo({ id }));
  const toggleTodo = (id: number) =>
    dispatch(TodoActionCreator.toggleTodo({ id }));

  return (
    <TodoList
      todoList={todoList}
      deleteTodo={deleteTodo}
      toggleTodo={toggleTodo}
    />
  );
};

export default TodoListContainer;
