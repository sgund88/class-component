import axios from "axios";

const basicUrl = axios.create({
  baseURL: "http://localhost:8080",
});

export const getAllEmployee = async (currentPage, recordPerPage) => {
  currentPage = currentPage - 1;
  const response = await basicUrl.get(
    "/employees?page=" + currentPage + "&size=" + recordPerPage
  );
  return response;
};

export const getUserId = async (email, password) => {
  const response = await basicUrl.get(
    "/user/login?email=" + email + "&password=" + password
  );
  return response;
};

export const updateUser = async (id, name, email, password) => {
  const response = await basicUrl.post(
    "/user/update?id=" +
      id +
      "&name=" +
      name +
      "&email=" +
      email +
      "&password=" +
      password
  );
  return response;
};

export const addUser = async (name, email, password) => {
  const response = await basicUrl.post(
    "/user?name=" + name + "&email=" + email + "&password=" + password
  );
  return response;
};
