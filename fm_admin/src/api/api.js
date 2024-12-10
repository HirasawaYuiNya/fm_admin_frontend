import axios from "axios";

const monkTest = axios.create({
  baseURL: "http://127.0.0.1:4523/m1/5505077-5181244-default/api",
  timeout: 10000,
});
export const getUserList = (data) => {
  return monkTest({
    Headers: {
      "Content-Type": "application/json",
    },
    url: "/user/admin/page",
    method: "get",
    data,
  });
};
export const getUser = (id) => {
  return monkTest({
    Headers: {
      "Content-Type": "application/json",
    },
    url: "/user/admin/user/${id}",
    method: "get",
  });
};
export const getPostList = (data) => {
  return monkTest({
    Headers: {
      "Content-Type": "application/json",
    },
    url: "/post",
    method: "get",
    data,
  });
};
