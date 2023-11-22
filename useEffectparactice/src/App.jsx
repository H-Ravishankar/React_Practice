import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [name,setName] = useState('Jhon')
  useEffect(()=>{
    console.log("name changed")
   
  })

  function changeName(){
    setName("Danny")
  }

  return (
    <>
      <div>
        <h1>{name}</h1>
      </div>

      <button onClick={changeName}>btn</button>
       
    </>
  )
}

export default App
