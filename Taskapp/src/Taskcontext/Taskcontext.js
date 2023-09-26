import React, { createContext, useContext } from 'react'
 export const TaskContext=createContext({
    todos:[{
        id:9,
        todo:"Todo Msg",
        checked:false   
    }],
    addTask:(todo)=>{},
    updateTask:(id,todo)=>{},
    deleteTask:(id)=>{},
    toggleComplete:(id)=>{}
 })

 export const TaskContextProvider=TaskContext.Provider;

 export function useTask(){
    return useContext(TaskContext)
 }