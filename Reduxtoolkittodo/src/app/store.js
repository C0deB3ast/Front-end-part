import {configureStore} from '@reduxjs/toolkit'
import taskReducer from './Features/task/taskSlice'


export const store=configureStore({
    reducer:taskReducer
})
