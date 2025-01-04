import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useFetch } from './hooks/useFetch';

//custom hook

// function useCounter()
// {
//   const [count, setCount] = useState(0);

//   function increase()
//   {
//     setCount(c => c+1);
//   }

//   function decrease()
//   {
//     setCount(c => c-1)
//   }

//   return({
//     count : count,
//     increase : increase,
//     decrease : decrease
//   })
  
// }

// function App() {
//   return (
//     <div>
//       <Counter/>
//       <Counter/>
//     </div>
//   )
// }

// function Counter()
// {

//   const {count, increase, decrease} = useCounter();

//   return(
//     <div>
//       <div style={{background : "cyan", color : "red"}}>{count}</div>
//       <button onClick={increase}>Increase</button>
//       <button onClick={decrease}>Decrease</button>
//     </div>
//   )
// }

// export default App

function app()
{
  const {finalData, loading} = useFetch("https://codehelp-apis.vercel.app/api/get-blogs");
  return(
    <div>
      {
        !loading ? JSON.stringify(finalData) : "Loading..."
      }
    </div>
  )
}

export default app;
