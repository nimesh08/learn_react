import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

const [todos,setTodos]=useState([{
  "title":"this is first",
  "discreption":"this is first discription",
  "complested":false
},
{
  "title":"this is 2",
  "discreption":"this is 2 discription",
  "completed":false
}
]);
function addTodo(){

  setTodos([...todos,{"title":"random",
"discreption":"random",
"completed":false}])
}

  return (
    <div>
      {/* <Todo title="nimesh"  discreption="nimesh"></Todo> */}
      <button onClick={addTodo} >add to a random todo</button>
      {todos.map(function(todo){
        return <Todo title={todo.title} discreption={todo.discreption} ></Todo>
      })}
    </div>
  )
}

function Todo(props){
  return <dir>

      <h1>{props.title}</h1>
      <h2>{props.discreption}</h2>
  </dir>

}

export default App
