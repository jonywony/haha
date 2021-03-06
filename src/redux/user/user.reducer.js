import { userActionTypes } from "./user.types";

const { SET_CURRENT_USER } = userActionTypes;

const INITIAL_STATE = {
  currentUser: {
    displayName: "",
    email: "",
    profileImage: "",
    backgroundProfileImage: "",
    address: "",
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
