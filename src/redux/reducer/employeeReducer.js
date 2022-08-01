import { actionType } from "../actions/employeeActions";

const initialState = {
  employees: [],
  totalPages: 0,
  totalElements: 0,
  currentPage: 1,
};

export const EmployeeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.SET_EMPLOYEES:
      return { ...state, employees: payload };
    case actionType.SET_TOTAL_PAGES:
      return { ...state, totalPages: payload };
    case actionType.SET_TOTAL_ELEMENTS:
      return { ...state, totalElements: payload };
    case actionType.SET_CURRENT_PAGE:
      return { ...state, currentPage: payload };
    default:
      return state;
  }
};
