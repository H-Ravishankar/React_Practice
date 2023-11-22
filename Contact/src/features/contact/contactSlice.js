import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
 contacts:   [
        {id: 1, name: "Ram", email:"ram@gmail.com"}
    ]
}


export const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers:{

        addContact: (state, action)=>{
            const contact = {
                id: nanoid(),
                name: action.payload.name,
                email: action.payload.email
            }
            state.contacts.push(contact)
        },
        removeContact:(state, action)=>{
            state.contacts = state.contacts.filter((contact)=>contact.id !== action.payload)
        }
    }
})

export const {addContact, removeContact} = contactSlice.actions
export default contactSlice.reducer