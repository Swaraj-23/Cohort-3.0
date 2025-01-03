import { useState } from 'react'
import './App.css'
import { createContext } from 'react'
import { useContext } from 'react'

const BulbContext = createContext();

/*
function CountContextProvider({ children }) {
  const [count, setCount] = useState(0);

  return <CountContext.Provider value={{count, setCount}}>
    {children}
  </CountContext.Provider>
} 
*/

function App() {
  const[bulbOn, setBulbOn] = useState(true);

  return (
    <div>
      <BulbContext.Provider value={{
        bulbOn : bulbOn,
        setBulbOn : setBulbOn
      }}>
        <LightBulb/>
      </BulbContext.Provider>
    </div>
  )
}

function LightBulb(){
  return(
    <div>
      <BulbState/>
      <ToggleBulbState/>
    </div>
  )
}

function BulbState()
{
  const {bulbOn} = useContext(BulbContext);

  return(
    <div>
      {
        bulbOn ? "bulb on" : "bulb off"
      }
    </div>
  )
}

function ToggleBulbState()
{
  const {setBulbOn} = useContext(BulbContext);

  function toggleState()
  {
    setBulbOn((prev) => !prev)
  }
  return(
    <div>
      <button onClick={toggleState}>Toggle bulb state</button>
    </div>
  )
}

export default App;
