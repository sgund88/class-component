import { loaderActionType } from "../actions/loaderAction";

const initialState = false;

export const LoaderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case loaderActionType.SET_LOADER:
      return { ...state, loader: payload };
    default:
      return state;
  }
};
