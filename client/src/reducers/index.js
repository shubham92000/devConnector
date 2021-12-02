import { combineReducers } from "redux";
import alert from './alert';
import auth from './auth';


export default combineReducers({
  // any reducers that we create
  alert,
  auth
});