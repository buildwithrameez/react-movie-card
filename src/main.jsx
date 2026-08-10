import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Moviecard }  from './App.jsx'
import { Practice } from './practices.jsx'
import Profile from './components/Profile.jsx'
import { EventHandling } from './components/Events.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Moviecard /> */}
    <EventHandling />
    {/* <Practice />

     challenge file
    <Profile /> */} 
   
  </StrictMode>,
)
