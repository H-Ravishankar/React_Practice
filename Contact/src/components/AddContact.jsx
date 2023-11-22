import { useState } from "react"
import {useDispatch} from 'react-redux'
import { addContact} from '../features/contact/contactSlice'
function AddContact(){
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const dispatch = useDispatch()

   const addContactHandler = (e)=>{
    e.preventDefault()
    dispatch(addContact(({name, email})))
    // console.log(name)
    // console.log(email)
    setName('')
    setEmail('')
    
    
   }

    return (
        <div>
            <form onSubmit={addContactHandler}>
                <div>
                <label>Name  </label>
                <input 
                type="text"
                placeholder="Enter name here......."
                value={name} 
                onChange={(e)=>setName(e.target.value)}
                />
                </div>

                <div>
                <label >Email </label>
                <input 
                type="text" 
                placeholder="Enter email here......"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                </div>

                <button type="submit">Add</button>
            </form>


           
        </div>
    )
}
export default AddContact