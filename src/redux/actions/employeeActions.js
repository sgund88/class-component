export const actionType = {
  SET_EMPLOYEES: "SET_EMPLOYEES",
  SET_TOTAL_PAGES: "SET_TOTAL_PAGES",
  SET_TOTAL_ELEMENTS: "SET_TOTAL_ELEMENTS",
  SET_CURRENT_PAGE: "SET_CURRENT_PAGE",
};

export const setEmployees = (employees) => {
  return {
    type: actionType.SET_EMPLOYEES,
    payload: employees,
  };
};

export const setTotalPages = (totalPages) => {
  return {
    type: actionType.SET_TOTAL_PAGES,
    payload: totalPages,
  };
};

export const setTotalElements = (totalElements) => {
  return {
    type: actionType.SET_TOTAL_ELEMENTS,
    payload: totalElements,
  };
};

export const setCurrentPage = (currentPage) => {
  return {
    type: actionType.SET_CURRENT_PAGE,
    payload: currentPage,
  };
};
