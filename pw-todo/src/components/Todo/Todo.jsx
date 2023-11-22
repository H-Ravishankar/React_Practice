import { useState } from "react";

function Todo({todoData,isfinished,id}){
    const[finished, setFinished] = useState(isfinished)
    return (
        <div>
            <input type="checkbox" checked={finished} onChange={(e=>setFinished(e.target.checked))}/>
            {todoData}
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}
export default Todo;