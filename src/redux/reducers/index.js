import { combineReducers } from "redux";
import { crudReducer } from "./crudReducer";
// import { authReducer } from "./authReducers";

const reducers = combineReducers({
  tutorials: crudReducer,
  // auth: authReducer,
});

export default reducers;
