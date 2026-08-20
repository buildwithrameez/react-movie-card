import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Moviecard }  from './App.jsx'
import { Practice } from './practices.jsx'
import Profile from './components/Profile.jsx'
import { EventHandling } from './components/Events.jsx'
import { State } from './Hooks/State.jsx'
import { DerivedState2 } from './Hooks/DerivedState.jsx'
import { LiftstateUp } from './Hooks/LiftingState.jsx'
import { ToggleSwitch } from './Projects/ToggleSwitch/ToggleSwitch.jsx'
import ShortCircuit from './components/ShortCircuit.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Moviecard /> */}
    {/* <Practice /> */}
     {/* challenge file */}
    {/* <Profile /> 
    <EventHandling />
    <State /> */}
    {/* <DerivedState2 /> */}
    {/* <LiftstateUp /> */}
    {/* Mini Project */}
    {/* <ToggleSwitch /> */}
    <ShortCircuit />
  </StrictMode>,
)
