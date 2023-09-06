import { createReducer } from '@reduxjs/toolkit'

const initialState={
    number:true
}

export const custom=createReducer(initialState,{
    changethenumber:(state,action)=>{
        state.number = action.payload
    }
})