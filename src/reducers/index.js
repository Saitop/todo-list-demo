import loginReducer from "./login";
import {combineReducers} from "redux";
import todoReducer from "./todo";


const rootReducer = combineReducers({
  isLogin: loginReducer,
  todoResource: todoReducer
});

export default rootReducer;
