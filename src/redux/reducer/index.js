import { combineReducers } from "redux";
import { EmployeeReducer } from "./employeeReducer";
import { LoaderReducer } from "./loaderReducer";
import { UserReducer } from "./userReducer";

const reducers = combineReducers({
  allEmployees: EmployeeReducer,
  user: UserReducer,
  loader: LoaderReducer,
});

export default reducers;
