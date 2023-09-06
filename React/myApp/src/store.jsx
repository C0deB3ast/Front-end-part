import { configureStore } from "redux";
import {custom} from './reducer'

export const store =configureStore({
    reducer:{
        custom:custom
    }
})

export default store