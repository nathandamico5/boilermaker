import { combineReducers } from "redux";
import authReducer from "./auth";

// Comined Reducer
const appReducer = combineReducers({
  auth: authReducer,
});

export default appReducer;
