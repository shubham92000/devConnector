import axios from 'axios';
import { GET_ERRORS } from "./types"
import { GET_USER } from './types';

export const registerUser = (userData, history) => dispatch => {
  axios.post('/api/users/register', userData)
    .then(res => dispatch({
      type: GET_USER,
      payload: res.data
    }))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};