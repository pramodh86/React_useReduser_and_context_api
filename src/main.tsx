import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ItemContProvider } from './Context/MyContext'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ItemContProvider>
    <App />
    </ItemContProvider>
    
  </React.StrictMode>,
)
