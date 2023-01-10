import React from 'react'

type Props = {}

const App = (props: Props) => {
  let msg = "World"
  const addResult = (x: string, y: string) => {
    return (
      <div>
        {x} + {y} = {x + y}
      </div>
    )
  }
  return (
    <div>
      <h2>Hello {msg}</h2>
      <hr />
      {addResult("리액트를", "배워 봅시다")}
    </div>
  )
}

export default App