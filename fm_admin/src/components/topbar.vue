<template>
  <div class="topbar">
    <span class="topbar-text">{{ text }}</span>
    <LoginOutlined class="topbar-icon" @click="logout" />
  </div>
</template>
<script setup>
import { LoginOutlined } from "@ant-design/icons-vue";
import { useRouter } from "vue-router";
import { showAlert } from "../utils/alertService";

const router = useRouter();
const props = defineProps({
  text: String,
});
const logout = () => {
  localStorage.removeItem("token");
  showAlert("登出成功", "success");
  router.push("/login");
};
</script>
<style scoped>
.topbar {
  width: 1320px;
  height: 120px;
  background-color: #ffffff;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 30px 0 0 100px;
}
.topbar-text {
  font-size: 30px;
  color: black;
}
.topbar-icon {
  font-size: 40px;
  color: black;
  margin-top: 10px;
  margin-left: 1100px;
  cursor: pointer;
}
</style>
