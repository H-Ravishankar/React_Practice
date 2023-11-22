import { useParams } from "react-router-dom";
function User(){
    const {id} = useParams()
    return(
        <div className="bg-sky-500 text-2xl p-3 rounded-2xl text-white" >User: {id} </div>
    )
}
export default User;