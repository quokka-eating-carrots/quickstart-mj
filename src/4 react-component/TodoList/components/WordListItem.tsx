import React from 'react'
import { WordListItemType } from '../AppContainer'

type WordListItemProps = {
  wordItem: WordListItemType
  toggleDone: (no: number) => void
  deleteWord: (no: number) => void
}

const WordListItem = (props: WordListItemProps) => {
  let itemClassName = "list-group-item"
  if (props.wordItem.done) itemClassName += " list-group-item-success"
  return (
    <li className={itemClassName}>
      <span className={props.wordItem.done ? "word-done pointer" : "pointer"}
      onClick={() => props.toggleDone(props.wordItem.no)}
      >
        {props.wordItem.word}
        {props.wordItem.done ? " (완료)" : ""}
      </span>
      <span className="float-end badge bg-secondary pointer"
      onClick={() => props.deleteWord(props.wordItem.no)}
      >삭제</span>
    </li>
  )
}

export default WordListItem