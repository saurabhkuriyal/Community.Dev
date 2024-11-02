import { combineReducers } from "@reduxjs/toolkit";
import tokenReducer from "../feature/handleApi/tokenSlice";
import userReducer from "../feature/handleApi/userSlice";

const rootReducer=combineReducers({
    auth:tokenReducer,
    user:userReducer
})

export default rootReducer;