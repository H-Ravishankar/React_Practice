import Icon from "../icon/Icon";

function Card({player}){
    let icon = <Icon/>
    if(player == 'x')
    {
        icon = <Icon name ='cross'/>
    }else if(player == 'o') {

        icon = <Icon name = 'circle'/>
    }
    return(
      
        <div className='bg-yellow-400 w-28 h-28 p-11 border-2 border-slate-950 rounded ml-1 mr-1  ' > 
              {icon}
        </div>
    )
}
export default Card;