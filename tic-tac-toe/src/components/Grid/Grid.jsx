import { useState } from "react";
import Card from "../Card/Card";

function Grid({numberOfCards}){
    const [board,setBoard] = useState(Array(numberOfCards).fill(''))
    return(
        <div className="grid grid-cols-3 h h-96 place-content-center ml-10 mr-96 "> 
            {board.map((el,idx)=> <Card key={idx}/>)}

        </div>
    )
}
export default Grid;