import { useDispatch, useSelector } from "react-redux"
import { Edit, removeTodo } from "../features/todo/todoSlice"



function Todos(){
    const todos = useSelector((state)=>state.todos)
    const dispatch = useDispatch()
    
    
    
    return (
        <>
        <div> Todos </div>
        {todos.map((todo)=>(
        <li key={todo.id}>
            {todo.text}
       
         <button
          onClick={()=>dispatch(Edit(todo.id))} >
            Edit</button>
          
         <button 
          onClick={()=>dispatch(removeTodo(todo.id))}>
            Delete</button>
         </li>
        
         ))}
         

        </>
    )
}
export default Todos 