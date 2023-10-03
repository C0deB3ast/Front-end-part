import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Addtask from './Components/Addtask'
import Tasklist from './Components/Tasklist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>ADD TASK HERE....</h1>
    <Addtask/>
    <Tasklist/>
    </>
  )
}

export default App
