import { useState } from "react";
import Node from "./Node";
import { ACTION_TYPES, NODE_TYPES } from "../../../constant";
import { computeConfigBasedOnType } from "../../../utils";
import { ActionType, FilesData, FileType } from "../../../types";
import PopUpMenu from "../../PopUpMenu/PopUpMenu";


interface Props{
    type:FileType,
    name:string,
    data?:FilesData[],
    level:number
}

const Nodes = ({ type, name, data , level }:Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState(false);
    const [openMenuAction, setOpenMenuAction] = useState(false);
  
      
    const config = computeConfigBasedOnType(type, isOpen);
    const Icon = config.icon;

    const handleRightClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault(); 
        setOpenMenuAction(!openMenuAction)
      };
  

  
    const handleTitleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if(event.button === 0){
            setActive(!active)
        }
        if (type === NODE_TYPES.FOLDER) {
            setIsOpen(!isOpen);
        }
    };

    const handleAction=(actiontype:ActionType)=>{
        console.log(actiontype)
        setOpenMenuAction(!openMenuAction)
    }

    return (
      <div>
        <div className="node" style={{ paddingLeft: `calc(${level} * 12px)`,backgroundColor:active ? "lightgray":"" }}>
          <div className="entry">
            <button className="title" onClick={handleTitleClick}  onContextMenu={handleRightClick}>
                <img src={Icon} />
                <p>{name}</p>
            </button>
          </div>
            {openMenuAction && <PopUpMenu data={ACTION_TYPES} handleAction={handleAction}/>}
        </div>

        {data && data.length && isOpen ? (
          <div className="node_contents">
            <Node nodes={data} level={level + 1} />
          </div>
        ) : null}
      </div>
    );
  };

  export default Nodes