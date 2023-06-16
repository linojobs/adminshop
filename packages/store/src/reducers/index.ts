import {combineReducers} from "@reduxjs/toolkit";
import system from "./system";

export default combineReducers({
    system:system.reducer
})