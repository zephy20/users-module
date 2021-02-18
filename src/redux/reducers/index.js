import {
  DELETE_USER,
  GET_USERS,
  GET_USERS_FAILURE,
  GET_USERS_SUCCESS,
  SORT_USERS
} from "../actionTypes";

const initialState = {
  users: [],
  loader: true,
  sortInfo: {},
  error: null
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
      return {
        ...state,
        loader: false,
        users: action.response
      };
    }

    case GET_USERS_FAILURE: {
      return {
        ...state,
        loader: false,
        error: "Error fetching data!"
      };
    }

    case SORT_USERS: {
      const { type, order } = action.payload;
      const sortedData = [...state.users];
      sortedData.sort((a, b) => {
        if (a[type] < b[type]) {
          return order === "dec" ? 1 : -1;
        }
        if (a[type] > b[type]) {
          return order === "dec" ? -1 : 1;
        }
        return 0;
      });

      return {
        ...state,
        users: sortedData,
        sortInfo: {
          order,
          type
        }
      };
    }

    case DELETE_USER: {
      const { userId } = action.payload;
      const updatedUserData = [...state.users];
      const deleteIdx = updatedUserData.findIndex(item => item.id === userId);

      if (deleteIdx !== -1) {
        updatedUserData.splice(deleteIdx, 1);
      }
      return {
        ...state,
        users: updatedUserData
      };
    }

    default:
      return state;
  }
}
