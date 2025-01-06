import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react';

function useDebounce(originalFn)
{
  const currClock = useRef();

  function fn()
  {
    clearTimeout(currClock.current);
    currClock.current = setTimeout(originalFn, 200)
  }

  return fn;
}

function App() {

  function sendDataToBackend()
  {
    fetch("api.amazon.com/search/");
  }

  const debouncedFn = useDebounce(sendDataToBackend);

  return (
    <>
      <input type='text' onChange={debouncedFn}></input>
    </>
  )
}

export default App
