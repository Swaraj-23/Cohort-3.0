import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <LightBulb/>
    </div>
  )
}

function LightBulb(){
  const[bulbOn, setBulbOn] = useState(true);
  return(
    <div>
      <BulbState bulbOn={bulbOn}/>
      <ToggleBulbState setBulbOn={setBulbOn}/>
    </div>
  )
}

function BulbState(props)
{
  return(
    <div>
      {
        props.bulbOn ? "bulb on" : "bulb off"
      }
    </div>
  )
}

function ToggleBulbState(props)
{
  function toggleState()
  {
    props.setBulbOn((prev) => !prev)
  }
  return(
    <div>
      <button onClick={toggleState}>Toggle bulb state</button>
    </div>
  )
}

export default App
