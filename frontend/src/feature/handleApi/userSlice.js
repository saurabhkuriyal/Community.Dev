import { createSlice } from "@reduxjs/toolkit";

const initialState={
    userId:"",
    name:"",
    userType:"",
    userImageURL:"",
}

export const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state.userId=action.payload.userId;
            state.name=action.payload.name;
            state.userType=action.payload.userType;
            state.userImageURL=action.payload.userImageURL;
        },
        deleteUser:(state,action)=>{
            state.userId=null;
            state.name=null;
            state.userType=null;
            state.userImageURL=null;
        }
    }
})

export const {setUser,deleteUser}=userSlice.actions;

export default userSlice.reducer;