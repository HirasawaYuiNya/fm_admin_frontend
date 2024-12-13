import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    children: [
      { path: "", redirect: "login" },
      {
        path: "login",
        name: "login",
        component: () => import("../views/login.vue"),
      },
      {
        path: "user",
        name: "user",
        component: () => import("../views/user/user.vue"),
      },
      {
        path: "rewardPost",
        name: "rewardPost",
        component: () => import("../views/post/rewardPost.vue"),
      },
      {
        path: "tradePost",
        name: "tradePost",
        component: () => import("../views/post/tradePost.vue"),
      },
      {
        path: "message",
        name: "message",
        component: () => import("../views/message/message.vue"),
      },
      {
        path: "userReport",
        name: "userReport",
        component: () => import("../views/report/userReport.vue"),
      },
      {
        path: "postReport",
        name: "postReport",
        component: () => import("../views/report/postReport.vue"),
      },
      {
        path: "commentReport",
        name: "commentReport",
        component: () => import("../views/report/commentReport.vue"),
      },
      {
        path: "rewardAppeal",
        name: "rewardAppeal",
        component: () => import("../views/appeal/rewardAppeal.vue"),
      },
      {
        path: "tradeAppeal",
        name: "tradeAppeal",
        component: () => import("../views/appeal/tradeAppeal.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
