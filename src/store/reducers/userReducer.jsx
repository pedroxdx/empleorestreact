import { GET_USER_DATA } from "../types";
const initialState = {
  user: {}
};

const userReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_USER_DATA:
      return Object.assign({}, state, {
        user: actions.payload
      });
    default:
      return state;
  }
};

export default userReducer;
