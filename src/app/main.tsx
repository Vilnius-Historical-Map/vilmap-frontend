import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@styles/index.scss'
import '@styles/reset-styles.scss'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
