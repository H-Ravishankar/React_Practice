import { useDispatch, useSelector } from "react-redux";
import { addTodo,  updateTodo } from "../features/todo/todoSlice";
import { useEffect, useState } from "react";

const AddTodo = () => {
    const [input, setInput] = useState('');
    const [editMode, setEditMode] = useState(false);
    const todos = useSelector(state => state.todos);

    const dispatch = useDispatch();

    const addTodoHandler = e => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }

    const updateTodoHandler = e => {
        e.preventDefault();
        dispatch(updateTodo(input));
        setInput('');
        setEditMode(false);
    } 

    useEffect(() => {
        todos.map(todo => {
            if(todo.isEdit == true) {
                setEditMode(true);
                setInput(todo.text);
            }
        })
    }, [todos]);

    return (
        <form onSubmit={editMode ? updateTodoHandler : addTodoHandler} >
            <input
                type="text"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <button
                type="submit"
            >
                { editMode ? "Update" : "Add"} Todo
            </button>
        </form>
    )
};

export default AddTodo;