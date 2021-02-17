import { GET_USERS, GET_USERS_SUCCESS } from "../actionTypes";

const initialState = {
  users: [],
  loader: true
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USERS: {
      return {
        ...state,
        loader: true
      };
    }

    case GET_USERS_SUCCESS: {
      console.log(action);
      return {
        ...state,
        loader: false,
        users: action.response
      };
    }

    default:
      return state;
  }
}
