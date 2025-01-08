import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react';

// function useDebounce(originalFn)
// {
//   const currClock = useRef();

//   function fn()
//   {
//     clearTimeout(currClock.current);
//     currClock.current = setTimeout(originalFn, 200)
//   }

//   return fn;
// }

// function App() {

//   function sendDataToBackend()
//   {
//     fetch("api.amazon.com/search/");
//   }

//   const debouncedFn = useDebounce(sendDataToBackend);

//   return (
//     <>
//       <input type='text' onChange={debouncedFn}></input>
//     </>
//   )
// }

// export default App

/* Another implementation of useDebounce hook */

function useDebounce(value, delay)
{
  const[debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() =>{
    const handler = setTimeout(() =>{
      setDebouncedValue(value);
  }, delay);

  return ()=>{
    clearTimeout(handler);
  }
  }, [value, delay]);

  return debouncedValue;
}

function App()
{
  const[inputVal, setInputVal] = useState("");
  const debouncedValue = useDebounce(inputVal, 200);

  function change(e){
    setInputVal(e.target.value);
  }

  useEffect(()=>{
    //fetch
    console.log("expensive operation")
  },[debouncedValue]);

  return(
    <>
      <input type='text' onChange={change}></input>
    </>
  )
}

export default App