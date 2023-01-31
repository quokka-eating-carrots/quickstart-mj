import React from "react";
import { TodoListItemType } from "./App";

type Props = {
  TodoListItem: TodoListItemType;
};

const TodoListItemBody = (props: Props) => {
  console.log("## TodoListItemBody");
  return <span>{props.TodoListItem.todo}</span>;
};

export default React.memo(TodoListItemBody);
