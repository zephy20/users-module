import { getAllUsers } from "../api";
import {
  GET_USERS,
  SORT_USERS,
  DELETE_USER,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE
} from "./actionTypes";

export const getUsers = () => {
  return dispatch => {
    dispatch({ type: GET_USERS });
    return getAllUsers().then(
      users => dispatch({ type: GET_USERS_SUCCESS, response: users }),
      err => dispatch({ type: GET_USERS_FAILURE, err })
    );
  };
};

export const sortUsers = payload => ({
  type: SORT_USERS,
  payload
});

export const deleteUser = payload => ({
  type: DELETE_USER,
  payload
});
