import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'
import './index.css'
import App from './App'
// import reportWebVitals from './reportWebVitals'
// import state from "./redux/state"
import { addPost, updateNewPost } from "./redux/state"
// import { updateNewPost } from "./redux/state"
import { BrowserRouter } from "react-router-dom"
const root = ReactDOM.createRoot(document.getElementById('root'))

export let rerenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} updateNewPost={updateNewPost} />
      </BrowserRouter >
    </React.StrictMode>
  )
}