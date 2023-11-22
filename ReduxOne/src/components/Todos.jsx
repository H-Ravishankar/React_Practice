import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo, updateTodo} from '../features/todo/todoSlice'

function Todos() {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const [todoMsg, setTodoMsg] = useState(todos.todo)
    const [input, setInput] = useState('')

    const updateTodoHandler = (e) => {
      e.preventDefault()
      dispatch(updateTodo(todo.id))
      setInput('')
  }

  return (
    <>
    <div>Todos</div>
    <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className='text-white'>{todo.text}</div>

            <input 
            type="text"
            placeholder="Enter a Todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            
            />
           

           
            <button
             onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              
            </button>

            <button className='text-white' onClick={()=>dispatch(updateTodo(todo.id))}>
            Edit
            </button>

           
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos