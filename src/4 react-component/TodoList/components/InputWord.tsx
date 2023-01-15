import React, { useState } from 'react'

type InputWordProps = {
  addWord: (word: string) => void
}

const InputWord = (props: InputWordProps) => {
  const [word, setWord] = useState<string>("")

  const addHandler = () => {
    props.addWord(word)
    setWord("")
  }

  const enterInput = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") addHandler()
  }

  const ChangeWord = (e: React.ChangeEvent<HTMLInputElement>) => setWord(e.target.value)
  return (
    <div className="row">
      <div className="col">
        <div className="input-group">
          <input type="text" id="msg" className="form-control" name="msg" placeholder="단어를 입력해 주세요." value={word}
            onChange={ChangeWord} onKeyUp={enterInput}
          />
          <span className="btn btn-primaty input-group-addon" onClick={addHandler}>추가</span>
        </div>
      </div>
    </div>
  )
}

export default InputWord