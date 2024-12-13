import axios from "axios";

const monkTest = axios.create({
  baseURL: "http://127.0.0.1:4523/m1/5505077-5181244-default/api",
  timeout: 10000,
});
const env = axios.create({
  baseURL: "/api", // 使用代理
  timeout: 10000,
});

env.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `${token}`;
    } else {
      config.headers.Authorization = "";
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
//登录
export const login = (data) => {
  return env({
    headers: {
      "Content-Type": "application/json",
    },
    url: "/api/user/login",
    method: "post",
    data,
  });
};
//获取用户列表
export const getUserList = (params) => {
  return env({
    headers: {
      "Content-Type": "application/json",
    },
    url: "/api/user/admin/page",
    method: "get",
    params,
  });
};
//获取用户详细信息
export const getUser = (id) => {
  return env({
    headers: {
      "Content-Type": "application/json",
    },
    url: `/api/user/admin/user/${id}`,
    method: "get",
  });
};
//修改用户信息
export const updateUser = (data) => {
  return env({
    headers: {
      "Content-Type": "application/json",
    },
    url: `/api/user/admin/user`,
    method: "put",
    data,
  });
};
//获取帖子列表
export const getPostList = (params) => {
  return env({
    headers: {
      "Content-Type": "application/json",
    },
    url: "/api/post/post",
    method: "get",
    params,
  });
};
//获取帖子详细信息
export const getPost = (id) => {
  return env({
    headers: {
      "Content-Type": "application/json",
    },
    url: `/api/post/post/${id}`,
    method: "get",
  });
};
