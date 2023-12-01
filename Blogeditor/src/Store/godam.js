import {configureStore} from "@reduxjs/toolkit"
import authenSlice from "../Features/authenSlice";

const godam = configureStore({
    reducer:{
        authen:authenSlice,
    }
});

export default godam; 