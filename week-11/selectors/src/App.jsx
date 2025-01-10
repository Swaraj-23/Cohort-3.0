import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {RecoilRoot, useRecoilValue, useSetRecoilState} from 'recoil'
import { counterAtom } from './state/selector/counter'
import { evenSelector } from './state/selector/counter'

function App() {

  return (
    <RecoilRoot>
      <Buttons/>
      <br/>
      <Counter/>
      <br/>
      <IsEven/>
    </RecoilRoot>
  )
}

function Buttons()
{
  const setCount = useSetRecoilState(counterAtom);
  return(
  <>
    <button onClick={()=>setCount(c=>c+2)}>Increase</button>
    <button onClick={()=>setCount(c=>c-1)}>Decrease</button>
  </>
  )
}

function Counter()
{
  const count = useRecoilValue(counterAtom);

  return(
    <>
      {count}
    </>
  )
}

function IsEven()
{
  const even = useRecoilValue(evenSelector);

  return(
    <>
      {even ? "even" : "odd"}
    </>
  )
}

export default App
