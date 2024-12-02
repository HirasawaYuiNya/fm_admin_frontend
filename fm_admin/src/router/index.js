import { createRouter, createWebHashHistory } from "vue-router";
import user from "../views/user.vue";

// 路由规则
const routes = [
  {
    path: "/",
    component: user,
    children: [
      { path: "", redirect: "/User" },
      {
        path: "/user",
        name: "user",
        component: () => import("../views/user.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
