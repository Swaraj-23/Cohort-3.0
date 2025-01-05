import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { usePrev } from './hooks/usePrev'

function App() {
  const [count, setCount] = useState(0)
  const prev = usePrev(count)

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(c=> c+1)}>Click</button>
      <div>The previous value is {prev}</div>
    </>
  )
}

export default App
