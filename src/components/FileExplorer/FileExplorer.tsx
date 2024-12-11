import Node from './Bones/Node'
import {  FilesData } from '../../types'

interface Props{
    data:FilesData
}

const FileExplorer = ({data}:Props) => {
  return (
    <section className="directory">
            <div className="header">
                <div className="title">
                    <p>Files</p>
                </div>
            </div>
            <div className="content">
                <Node nodes={data.data as FilesData[]}  level={0}/>
            </div>
        </section>
  )
}

export default FileExplorer