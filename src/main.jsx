import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Moviecard }  from './App.jsx'
import { Practice } from './practices.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Moviecard /> */}
     <Practice />
  </StrictMode>,
)
