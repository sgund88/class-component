import { userActionType } from "../actions/userAction";

const initialState = {
  user: [],
  isUserAuthenticated: false,
};

export const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case userActionType.SET_USER:
      return { ...state, user: payload };
    case userActionType.SET_USER_AUTHENTICATED:
      return { ...state, isUserAuthenticated: payload };
    default:
      return state;
  }
};
