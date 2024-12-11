import { ActionType } from '../../types'

interface props{
    data:ActionType[],
    handleAction:(action:ActionType)=>void
}

const PopUpMenu = ({data,handleAction}:props) => {
  return (
    <div className="menu">
        {data.map((action,index)=>{
            return <div key={index} onClick={()=>handleAction(action)}>{action}</div>
        })}
    </div>
  )
}

export default PopUpMenu