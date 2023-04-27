import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './components/view/home'
import Home from './components/view/home'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
