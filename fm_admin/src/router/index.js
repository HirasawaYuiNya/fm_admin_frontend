import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    children: [
      { path: "", redirect: "user" },
      {
        path: "user",
        name: "user",
        component: () => import("../views/user.vue"),
      },
      {
        path: "rewardPost",
        name: "rewardPost",
        component: () => import("../views/rewardPost.vue"),
      },
      {
        path: "tradePost",
        name: "tradePost",
        component: () => import("../views/tradePost.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
