import { combineReducers } from "redux";
import authReducer from "./Reducer/authReducer";
import errorReducer from "./Reducer/errorReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer
});

