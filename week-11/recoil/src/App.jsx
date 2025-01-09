import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {RecoilRoot, useRecoilValue, useSetRecoilState} from 'recoil'
import { counterAtom } from './state/atom/counter'

function App() {

  return (
    <RecoilRoot>
      <Counter/>
    </RecoilRoot>
  )
}

function Counter()
{

  return(
    <>
      <CurrentCount/>
      <Increase/>
      <Decrease/>
    </>
  )
}

function CurrentCount()
{
  const count = useRecoilValue(counterAtom);

  return(
    <>
      {count}
    </>
  )
}


function Increase()
{
  const setCount = useSetRecoilState(counterAtom);

  return(
    <>
      <button onClick={()=>setCount(c=>c+1)}>Increase</button>
    </>
  )
}

function Decrease()
{
  const setCount = useSetRecoilState(counterAtom);

  return(
    <>
      <button onClick={()=>setCount(c=>c-1)}>Decrease</button>
    </>
  )
}

export default App
