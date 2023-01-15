import React, { useState } from 'react'
import { WordListItemType } from '../AppContainer'
import WordListItem from './WordListItem'

type WordListProps = {
  wordList: Array<WordListItemType>
  toggleDone: (no: number) => void
  deleteWord: (no: number) => void
}

const WordList = (props: WordListProps) => {
  let items = props.wordList.map(word => {
    return <WordListItem key={word.no} wordItem={word}
      deleteWord={props.deleteWord} toggleDone={props.toggleDone}
    />
  })
  return (
    <div className="row">
      {" "}
      <div className="col">
        <ul className="list-group">{items}</ul>
      </div>
    </div>
  )
}

export default WordList