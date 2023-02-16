import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import TodoActionCreator from "../redux/TodoActionCreator";
import { connect } from "react-redux";
import { TodoStatesType, TodoItemType } from "../redux/TodoReducer";
import { AnyAction, Dispatch } from "redux";
import { RootStatesType } from "../redux/AppStore";

type PropsType = {
  updateTodo: (id: number, todo: string, desc: string, done: boolean) => void;
  todoList: Array<TodoItemType>;
};
type TodoParam = { id?: string };

const EditTodo = ({ todoList, updateTodo }: PropsType) => {
  const navigate = useNavigate();
  let { id } = useParams<TodoParam>();
  let todoItem = todoList.find((item) => item.id === parseInt(id ? id : "0"));
  if (!todoItem) {
    navigate("/todos");
    return <></>;
  }
  const [todoOne, setTodoOne] = useState<TodoItemType>({ ...todoItem });

  const updateTodoHandler = () => {
    if (todoOne.todo.trim() === "" || todoOne.desc.trim() === "") {
      alert("반드시 할 일, 설명을 입력해야 합니다.");
      return;
    }
    let { id, todo, desc, done } = todoOne;
    updateTodo(id, todo, desc, done);
    navigate("/todos");
  };
  return (
    <>
      <div className="row">
        <div className="col p-3">
          <h2>할 일 수정</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="form-group">
            <label htmlFor="todo">할 일:</label>
            <input
              type="text"
              className="foorm-control"
              id="todo"
              value={todoOne.todo}
              onChange={(e) => setTodoOne({ ...todoOne, todo: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="desc">설명:</label>
            <textarea
              id="desc"
              rows={3}
              className="form-control"
              value={todoOne.desc}
              onChange={(e) => setTodoOne({ ...todoOne, desc: e.target.value })}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="done">완료 여부:</label>{" "}
            <input
              type="checkbox"
              checked={todoOne.done}
              onChange={(e) =>
                setTodoOne({ ...todoOne, done: e.target.checked })
              }
            />
          </div>
          <div className="form-group">
            <button
              type="button"
              className="btn btn-primary m-1"
              onClick={updateTodoHandler}
            >
              수정
            </button>
            <button
              type="button"
              className="btn btn-primary m-1"
              onClick={() => navigate("/todos")}
            >
              취소
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateProps = (state: RootStatesType) => ({
  todoList: state.todos.todoList,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  updateTodo: (id: number, todo: string, desc: string, done: boolean) =>
    dispatch(TodoActionCreator.updateTodo({ id, todo, desc, done })),
});

const EditTodoContainer = connect(mapStateProps, mapDispatchToProps)(EditTodo);

export default EditTodoContainer;
