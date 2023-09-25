import React, { createContext, useContext } from 'react'
 
export const Todocontext=createContext({
     todos:[{
        id:7,
        todo:"Todo Tasks",
        checked: false
    }],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleCheacked:(id)=>{}
});

export const Todocontextprovider=Todocontext.Provider;

export function useTodo(){
    return useContext(Todocontext);
}