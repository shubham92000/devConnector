import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';

export default combineReducers({
  // any reducers that we create
  alert,
  auth,
  profile,
});
