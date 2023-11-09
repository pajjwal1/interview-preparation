import { configureStore } from "@reduxjs/toolkit";
import { userSlices } from "./slices/UserSlices";

const store = configureStore({
    reducer:{
        users: userSlices.reducer,
        // post: postReducer.reducer  for example for other slices
    }
})

export default store;