import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // 引入路由配置
import * as Icons from "@ant-design/icons-vue";
const app = createApp(App);

app.use(router);

Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key]);
});

app.mount("#app");
