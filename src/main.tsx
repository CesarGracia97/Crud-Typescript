import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './components/view/Home'
import Home from './components/view/Home'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
