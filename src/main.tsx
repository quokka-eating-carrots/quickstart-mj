import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
// import App from './App'
import App from './4 react-component/Counter/App'
import App2 from './4 react-component/Counter/App2'
import App3 from './4 react-component/Counter/App3'
// import './index.css'
import produce from 'immer'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <App2 />
    <App3 />
  </React.StrictMode>,
)

let quiz = {
  "students": ["닝닝", "윈터", "카리나", "지젤"],
  "quizlist": [
    {
      "question": "세븐틴 노래 제목이 아닌 것은?",
      "options": [
        { "no": 1, "option": "독" },
        { "no": 2, "option": "힛" },
        { "no": 3, "option": "훗" },
        { "no": 4, "option": "팡" }
      ],
      "answer": 3
    },
    {
      "question": "나의 최애 라면은?",
      "options": [
        { "no": 1, "option": "진라면 순한 맛" },
        { "no": 2, "option": "열라면" },
        { "no": 3, "option": "삼양라면" },
        { "no": 4, "option": "안성탕면" }
      ],
      "answer": 2
    },
  ]
}

const quiz2 = produce(quiz, draft => {
  draft.quizlist[0].options[0].option = "핫"
})

console.log(quiz2)