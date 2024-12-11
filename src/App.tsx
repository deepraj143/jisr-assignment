import './App.css'
import FileExplorer from './components/FileExplorer/FileExplorer'
import { FILES_DATA } from './constant'

function App() {

  return (
    <>
      <FileExplorer data={FILES_DATA}/>
    </>
  )
}

export default App
