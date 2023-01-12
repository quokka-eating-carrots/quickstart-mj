import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
// import App from './App'
import App from '../src/MinJeong/Counter/App'
import App2 from '../src/MinJeong/Counter/App2'
import App3 from './MinJeong/Counter/App3'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <App2 />
    <App3 />
  </React.StrictMode>,
)
