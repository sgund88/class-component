export const userActionType = {
  SET_USER: "SET_USER",
  SET_USER_AUTHENTICATED: "SET_USER_AUTHENTICATED",
};

export const setUser = (user) => {
  return {
    type: userActionType.SET_USER,
    payload: user,
  };
};

export const setUserAuthenticated = (userAuthenticated) => {
  return {
    type: userActionType.SET_USER_AUTHENTICATED,
    payload: userAuthenticated,
  };
};
