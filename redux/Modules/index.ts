import { combineReducers } from "@reduxjs/toolkit";
import userLoginReducer from "./userlogin";
import templateReducer from "./templates";
export const combinedReducer = combineReducers({
  ...userLoginReducer,
  ...templateReducer,
});
