import { useState } from 'react'
import './App.css'
import TaskContextProvider from "./Taskcontext"

function App() {
  const [todos, setTodos] = useState([])
  const addTask=(todo)=>{
    setTodos((prev)=>[{id:Math.random(),...todo},...prev])   
  }
 const updateTask=(id,todo)=>{
    setTodos((prev)=>prev.map((oldvals)=>(oldvals.id === id ? todo:oldvals)))
  }

  const deleteTask=(id)=>{
    setTodos((prev)=>prev.filter((oldvals)=>oldvals.id !== id))
  }
   const toggleCompleted=(id)=>{
    setTodos((prev)=>prev.map((oldvals)=>oldvals === id ? {...oldvals,cheacked: !oldvals.cheacked} :oldvals))
   }


  return (
    <TaskContextProvider value={{todos,addTask,updateTask,deleteTask,toggleCompleted}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    </TaskContextProvider>
  )
}

export default App
