import React from 'react'

type Props = {}

const App = (props: Props) => {
  let msg = "World"
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
    </div>
  )
}

export default App