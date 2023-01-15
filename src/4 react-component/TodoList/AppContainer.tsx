import React, { useState } from 'react'
import produce from 'immer'
import App from './components/App'

export type WordListItemType = {
  no: number
  word: string
  done: boolean
}

const AppContainer = () => {
  const [wordList, setWordList] = useState<Array<WordListItemType>>([
    { no: 1, word: "go", done: false },
    { no: 2, word: "fly", done: false },
    { no: 3, word: "shine", done: true },
    { no: 4, word: "dream", done: true }
  ])

  const addWord = (word: string) => {
    let newWordList = produce(wordList, draft => {
      draft.push({ no: new Date().getTime(), word: word, done: false })
    })
    setWordList(newWordList)
  }

  const deleteWord = (no: number) => {
    let index = wordList.findIndex(word => word.no === no)
    let newWordList = produce(wordList, draft => {
      draft.splice(index, 1)
    })
    setWordList(newWordList)
  }

  const toggleDone = (no: number) => {
    let index = wordList.findIndex(word => word.no === no)
    let newWordList = produce(wordList, draft => {
      draft[index].done = !draft[index].done
    })
    setWordList(newWordList)
  }
  return (
    <App
      wordList={wordList}
      addWord={addWord}
      deleteWord={deleteWord}
      toggleDone={toggleDone}
    />
  )
}

export default AppContainer