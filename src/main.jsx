import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.scss'
import App from './App.jsx'

// проверка текущего URL
if (window.location.hostname === "open-academy.netlify.app") {
  window.location.replace("https://it-academy.uz/openday");
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
