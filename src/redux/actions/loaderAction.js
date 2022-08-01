export const loaderActionType = {
  SET_LOADER: "SET_LOADER",
};

export const setLoader = (loader) => {
  return {
    type: loaderActionType.SET_LOADER,
    payload: loader,
  };
};
