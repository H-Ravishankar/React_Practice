import { useDispatch, useSelector } from "react-redux"
import { removeContact } from "../features/contact/contactSlice"
function ContactList(){

  const dispatch = useDispatch()
  const contacts = useSelector(state=>state.contacts)      
      
    return (
       <div>
          <ul>
            {contacts.map((con)=>(
                <li key={con.id}>
                   <div>
                   <div>{con.name}</div>
                    <div>{con.email}</div>
                   </div>

                    <button onClick={()=>dispatch(removeContact(con.id))}>Delete</button>
                </li>
            ))}
          </ul>
       </div>
    )
}
export default ContactList