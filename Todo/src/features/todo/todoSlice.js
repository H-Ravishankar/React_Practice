import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {id: 1, text: "Hello World", isEdit: false}
    ]
}

export const tosoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
       
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                isEdit: false
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) =>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
           
            state.todos = state.todos.map((todo)=>{
                if(todo.isEdit)
                
                  return  ({...todo, text:action.payload, isEdit: false})
                 
                else return todo  
           })
       // state.todos = state.todos.map(todo => todo.isEdit ? {...todo, text: action.payload, isEdit: false}  : todo);
            
        },
        Edit:(state, action)=>{
            state.todos = state.todos.map(todo => (todo.id === action.payload) ? {...todo, isEdit: true}  : todo);
        }
        
    }
})

export const {addTodo, removeTodo, updateTodo,Edit} = tosoSlice.actions
export default tosoSlice.reducer