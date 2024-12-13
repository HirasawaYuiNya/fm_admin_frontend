import { createApp } from "vue";
import alertPart from "../components/alertPart.vue";

export function showAlert(message, type = "info", duration = 3000) {
  // 创建一个 DOM 元素，用于挂载组件
  const alertEl = document.createElement("div");
  document.body.appendChild(alertEl);

  // 创建 Vue 实例，并传递 props
  const alertApp = createApp(alertPart, {
    message,
    type,
    duration,
    close: () => {
      // 在关闭时移除 DOM 元素并卸载组件
      alertApp.unmount();
      document.body.removeChild(alertEl);
    },
  });

  // 挂载组件到刚创建的 DOM 元素上
  alertApp.mount(alertEl);
}
