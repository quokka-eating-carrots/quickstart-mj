import React from 'react'
import { TodoType } from '../App'
import styles from '../styles'

type TodoItemPropsType = {
  todoitem: TodoType
}

const TodoItem = (props: TodoItemPropsType) => {
  let item = props.todoitem
  return (
    <li
      style={styles.listItemStyle}
      className={item.done ? "list-group-item active" : "list-group-item"}
    >
      {item.todo}
    </li>
  )
}

export default TodoItem