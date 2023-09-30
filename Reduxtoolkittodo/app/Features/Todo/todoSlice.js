import { CreateSliceOptions ,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{id:2,text:"hloo"}]
}

export const todoSlicer=CreateSliceOptions({
    name:"task",
    initialState,
    reducer:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        deleteTodo:(state,action)=>{
            state.todos.filter((todo)=>todo.id !== action.payload)
        }
    }
})