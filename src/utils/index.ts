import { NODE_TYPES } from "../constant";
import CloseFolderIcon from "../assets/closeFolder.svg"
import OpenFolderIcon from "../assets/openFolder.svg"
import File from "../assets/file.svg"
import { FileType } from "../types";


export const computeConfigBasedOnType = (type:FileType, isOpen:boolean) => {
    if (type === NODE_TYPES.FILE) {
      return {
        icon: File,
      };
    }
  
    return {
      icon: isOpen ? OpenFolderIcon : CloseFolderIcon,
    };
  };