import React, { useState } from 'react'
import Calc from './Calc'

type Props = {}

const App = (props: Props) => {
  const [x, setX] = useState<number>(100)
  // const [y, setY] = useState<number>(200)
  // const [oper, setOper] = useState<string>("+")

  return (
    <div>
      <Calc x={x} />
    </div>
  )
}

export default App