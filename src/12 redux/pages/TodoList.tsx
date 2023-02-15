import { Link } from "react-router-dom";
import TodoItem from "./TodoItem";
import TodoActionCreator from "../redux/TodoActionCreator";
import { AnyAction, Dispatch } from "redux";
import { connect } from "react-redux";
import { TodoStatesType, TodoItemType } from "../redux/TodoReducer";

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

const mapStateProps = (state: TodoStatesType) => ({
  todoList: state.todoList,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  deleteTodo: (id: number) => dispatch(TodoActionCreator.deleteTodo({ id })),
  toggleTodo: (id: number) => dispatch(TodoActionCreator.toggleTodo({ id })),
});

export default connect(mapStateProps, mapDispatchToProps)(TodoList);
