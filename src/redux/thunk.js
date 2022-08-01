import { addUser, getAllEmployee, getUserId, updateUser } from "./service";
import {
  setEmployees,
  setTotalPages,
  setTotalElements,
  setCurrentPage,
} from "./actions/employeeActions";
import { setUser, setUserAuthenticated } from "./actions/userAction";
import { setLoader } from "./actions/loaderAction";

export const fetchAllEmployees = (currentPage, recordPerPage) => {
  return (dispatch) => {
    dispatch(Loader(true));
    getAllEmployee(currentPage, recordPerPage)
      .then((response) => {
        if (response.status === 200) {
          dispatch(setEmployees(response.data.content));
          dispatch(setTotalPages(response.data.totalPages));
          dispatch(setTotalElements(response.data.totalElements));
          dispatch(setCurrentPage(response.data.number + 1));
          dispatch(Loader(false));
        } else {
          console.log(response.error);
          dispatch(Loader(false));
        }
      })
      .catch((error) => {
        dispatch(console.log(error));
        dispatch(Loader(false));
      });
  };
};

export const loginUser = (email, password) => {
  return (dispatch) => {
    dispatch(Loader(true));
    getUserId(email, password)
      .then((response) => {
        if (response.status === 200 && response.data.length !== 0) {
          dispatch(setUser(response.data));
          dispatch(setUserAuthenticated(true));
          dispatch(Loader(false));
        } else {
          console.log("login unsuccessful");
          dispatch(Loader(false));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(Loader(false));
      });
  };
};

export const LogoutUser = () => {
  return (dispatch) => {
    dispatch(setUser("", ""));
    dispatch(setUserAuthenticated(false));
  };
};

export const Loader = (loader) => {
  return (dispatch) => {
    dispatch(setLoader(loader));
  };
};

export const updateUserInfo = (id, name, email, password) => {
  return (dispatch) => {
    dispatch(Loader(true));
    updateUser(id, name, email, password)
      .then((response) => {
        if (response.status === 200 && response.data.length !== 0) {
          dispatch(setUser("", ""));
          dispatch(setUserAuthenticated(false));
          dispatch(Loader(false));
        } else {
          console.log(response);
          dispatch(Loader(false));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(Loader(false));
      });
  };
};

export const CreateUser = (name, email, password) => {
  return (dispatch) => {
    dispatch(Loader(true));
    addUser(name, email, password)
      .then((response) => {
        if (response.status === 200 && response.data.length !== 0) {
          dispatch(setUser(response.data));
          dispatch(setUserAuthenticated(true));
          dispatch(Loader(false));
        } else {
          console.log(response);
          dispatch(Loader(false));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(Loader(false));
      });
  };
};
