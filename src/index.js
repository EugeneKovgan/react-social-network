import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import state from "./redux/state"
import { addPost, updateNewPost, subscriber } from "./redux/state"
import { BrowserRouter } from "react-router-dom"
const root = ReactDOM.createRoot(document.getElementById('root'))

let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} updateNewPost={updateNewPost} />
      </BrowserRouter >
    </React.StrictMode>
  )
}

rerenderEntireTree(state)

subscriber(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
