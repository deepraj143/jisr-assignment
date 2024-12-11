

import { FilesData } from '../../../types';
import Nodes from './Nodes';

interface Props{
    nodes:FilesData[],
    level:number
}

const Node = ({ nodes, level = 0 }:Props) => {
    return (
      <div className="nodes">
        {nodes.map((node,index) => {
          return <Nodes key={index} {...node} level={level} />;
        })}
      </div>
    );
  };

export default Node;
