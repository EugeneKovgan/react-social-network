import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
const postsData = [
  { id: '1', message: 'hi', likes: '2' },
  { id: '2', message: 'hi how are you?', likes: '5' },
  { id: '3', message: 'im fine', likes: '21' },
]

const dialogsData = [
  { id: '1', name: 'Eugene' },
  { id: '2', name: 'Eugene 2' },
  { id: '3', name: 'Eugene 3' },
  { id: '4', name: 'Eugene 4' },
  { id: '5', name: 'Eugene 5' },
]

const messagesData = [
  { id: '1', message: 'hi' },
  { id: '2', message: 'hello' },
  { id: '3', message: 'how are you?' },
  { id: '4', message: 'hi' },
]
root.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
