import { memo, useState } from 'react'

import './App.css'

function App() {

  const[text,setText]=useState("HELLO")
  function upatetitle(){
  setText(Math.random);
         }
  return (
    <>
      <button onClick={upatetitle}>click to do random change</button><br />
      <Header title={text}></Header>
 <Header title="hiiiiii1111"></Header>
    </>
  )
}

// eslint-disable-next-line react/prop-types


const Header=memo(function Header({title}){
  return <div>
    {title}
  </div>
  })

export default App
