
import './App.css'
import { RecoilRoot, useRecoilState } from 'recoil';
import { todosAtomFamily } from './atom';

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
    <Todo id={2} />
  </RecoilRoot>
}

function Todo({id}) {
   const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

   // loadable

   /*
   
   const todo = useRecoilValueLoadable(todosAtomFamily(id));
   
   const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));
   if (todo.state === "loading") {
      return <div>loading</div>
   }

   */

  return (
    <>
      {todo.title}
      {todo.description}
      <br />
    </>
  )
}

export default App
