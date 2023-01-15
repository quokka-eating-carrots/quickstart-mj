import React, { useState } from 'react'
import TodoList from '../MinJeong/components/TodoList'
import styles from '../MinJeong/styles'
import AppCssModule from './App.module.css'
import Footer from '../MinJeong/components/Footer'
import { BasicButton, ItalicButton, UnderLineButton, WhiteUnderLineButton } from '../MinJeong/components/Buttons'

export type TodoType = {
  no: number
  todo: string
  done: boolean
}


const App = () => {
  const [msg, setMsg] = useState<string>("World")
  const [list, setList] = useState<Array<TodoType>>([
    { no: 1, todo: "리액트 공부", done: false },
    { no: 2, todo: "영화 보기", done: true },
    { no: 3, todo: "드라마 보기", done: true }
  ])
  const [theme, setTheme] = useState<string>("basic")

  const addResult = (x: string, y: string) => {
    return (
      <div className="card card-body bg-light mb-3">
        {x} + {y} = {x + y}
      </div>
    )
  }

  return (
    <div className="container">
      <h2 className={AppCssModule.test}>Hello {msg}</h2>
      <hr style={styles.dashStyle} />
      {addResult("리액트를", "배워 봅시다")}
      <TodoList todos={list} />
      <BasicButton>기본</BasicButton>
      <ItalicButton>이탤릭</ItalicButton>
      <UnderLineButton>언더라인</UnderLineButton>
      <WhiteUnderLineButton>화이트 언더 라인</WhiteUnderLineButton>
      <Footer theme={theme} />
    </div>
  )
}

export default App