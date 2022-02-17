import { combineReducers } from "redux";
import currentUserReducer from "./currentUserReducer";
import taskReducer from "./taskReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  task: taskReducer,
  users: userReducer,
  currentUser: currentUserReducer,
  
})

export default rootReducer;