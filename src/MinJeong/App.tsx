import React, { useState } from 'react'
import CountryList from './components/CountryList'

export type CountryType = {
  no: number
  country: string
  visited: boolean
}


const App = () => {
  const [msg, setMsg] = useState<string>("World")
  const [list, setList] = useState<Array<CountryType>>([
    {no: 1, country: "이집트", visited: false},
    {no: 2, country: "일본", visited: true},
    {no: 3, country: "태국", visited: true}
  ])

  const addResult = (x: string, y: string) => {
    return (
      <div className="card card-body bg-light mb-3">
        {x} + {y} = {x + y}
      </div>
    )
  }

  return (
    <div className="container">
      <h2>Hello {msg}</h2>
      <hr className="dash-style"/>
      {addResult("리액트를", "배워 봅시다")}
      <CountryList countries={list}/>
    </div>
  )
}

export default App