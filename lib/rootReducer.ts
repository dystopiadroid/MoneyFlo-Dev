import { combineReducers } from "@reduxjs/toolkit";
import counter from "@/lib/features/counterSlice";

const rootReducer = combineReducers({
  counter,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
