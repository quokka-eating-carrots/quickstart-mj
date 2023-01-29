import React from 'react'
import { WordListItemType } from '../AppContainer'
import InputWord from './InputWord'
import WordList from './WordList'

type AppProps = {
  wordList: Array<WordListItemType>
  addWord: (word: string) => void
  deleteWord: (no: number) => void
  toggleDone: (no: number) => void
}

const App = (props: AppProps) => {
  return (
    <div className="container">
      <div className="card card-body bg-light">
        <div className="title">::WORD LIST APP::</div>
      </div>
      <div className="card card-default card-borderless">
        <div className="card-body">
          <InputWord addWord={props.addWord} />
          <WordList
            wordList={props.wordList}
            toggleDone={props.toggleDone}
            deleteWord={props.deleteWord}
          />
        </div>
      </div>
    </div>
  )
}

export default App