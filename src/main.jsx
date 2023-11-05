import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ButtonContextProvider } from './context/ButtonContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ButtonContextProvider>
      <App />
    </ButtonContextProvider>
  </React.StrictMode>,
)
