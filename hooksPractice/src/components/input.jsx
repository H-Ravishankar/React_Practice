import { useState } from "react"

function Input(){
   
    const [name, setName] = useState('')

    const addName = e=>{
        e.preventDefault()
        console.log(name)
        setName(name)
        setName("")
    }
    
    return (
     <div> 

        <input 
        type="text" 
        placeholder="Add your name here "
        value={name}
        onChange={(e)=> setName(e.target.value) }
        />

        

        <button onClick={addName}>Submit</button>
             
     </div>
    )
}
export default Input