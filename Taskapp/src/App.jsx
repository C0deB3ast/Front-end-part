import { useState , useEffect} from 'react'
import './App.css'
import { TaskContextProvider } from './Context'
import Taskform from './Components/Taskform'
import Taskitem from './Components/Taskitem'

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
   const toggleComplete=(id)=>{
    setTodos((prev)=>prev.map((oldvals)=>oldvals.id === id ? {...oldvals, cheacked: !oldvals.cheacked} : oldvals))
   }
//Get VAlue from local Storage
useEffect(() => {
  const todos =JSON.parse(localStorage.getItem("todos"));
  if(todos && todos.length > 0){
    setTodos(todos)
  }
}, []);

//Add Value in Local Storage
useEffect(() => {
  localStorage.setItem("todos",JSON.stringify(todos))
}, [todos]);

  return (
    <TaskContextProvider value={{todos,addTask,updateTask,deleteTask,toggleComplete}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                      {/* Task form starts here */}
                        <Taskform/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id} className="w-full">
                            <Taskitem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TaskContextProvider>
  )
}

export default App
