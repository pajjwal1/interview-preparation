import { createSlice } from "@reduxjs/toolkit";

const userSlices = createSlice({
    name:"user",
    initialState: [],
    reducers:{
        addUser(state, action){
            state.push(action.payload)
            //console.log(action.payload);
        },
        removeUser(state, action){
            state.splice(action.payload, 1);},
        clearAllUser(state, action){         
            state.splice(0, state.length)
        }
    }
})

// console.log(userSlices.actions);
export {userSlices}
export const {addUser, clearAllUser, removeUser} = userSlices.actions;