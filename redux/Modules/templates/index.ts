"use client";
import { templateSliceReducer } from "./templates.slice";

const combinedReducer = {
  ...templateSliceReducer,
};

export * from "./templates.slice";
export default combinedReducer;
