import { useParams } from "react-router-dom"
function User(){
    const {id} = useParams()
    return (
        <div className="text-center bg-teal-400 text-white text-2xl p-2">User - {id}</div>
    )
}

export default User