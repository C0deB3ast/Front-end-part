import { useEffect, useState } from 'react';
import './App.css';
import { Todocontextprovider } from './TdDoContext';

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo=(todo)=>{
    setTodos((oldvl)=>[{id:Math.random(), ...todo},...oldvl]);
  }
  const updateTodo=(id,todo)=>{
    setTodos((oldvl)=> oldvl.map((oldvlTodo)=>(oldvlTodo.id===id ? todo:oldvlTodo)));
  }
  const deleteTodo=(id)=>{
    setTodos((oldvl)=>oldvl.filter((oldvlTodo)=>oldvlTodo.id !==id));
  }
  const toggleCheacked=(id)=>{
    setTodos((oldvl)=>oldvl.map((oldvlTodo)=>oldvlTodo == id ? {...oldvlTodo, checked: !oldvlTodo.checked}:oldvlTodo));
  }
  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem("todos"));

    if(todos && todos.length>0){
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  return (
    <Todocontextprovider value={{todos,addTodo,updateTodo,deleteTodo,toggleCheacked}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-screen max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
            </Todocontextprovider>
  )
}

export default App
