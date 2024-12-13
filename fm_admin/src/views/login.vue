<template>
  <div class="background">
    <div class="login-part">
      <span class="header-item">管理员登录</span>
      <input class="input-item" v-model="phone" />
      <input class="input-item" v-model="password" />
      <button class="button-item" @click="loginUser">登录</button>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { login } from "../api/api.js";
import { useRouter } from "vue-router";
import { showAlert } from "../utils/alertService.js";
const router = useRouter();
const phone = ref("");
const password = ref("");
const loginUser = async () => {
  try {
    const requestData = {
      phone: phone.value,
      password: password.value,
    };
    const response = await login(requestData);
    if (response.data.status !== 0) {
      showAlert(response.data.msg, "error");
      return;
    }
    const token = response.data.data.token;
    localStorage.setItem("authToken", token);
    showAlert("登陆成功", "success");
    router.push("user");
  } catch (err) {
    console.error("登录失败：", err);
  }
};
</script>
<style scoped>
.background {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1700px;
  height: 920px;
  background-color: #f5f5f5;
}
.login-part {
  width: 300px;
  padding: 20px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.input-item {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.button-item {
  margin-top: 20px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  width: 80%;
}
.button-item:hover {
  background-color: #0056b3;
}
.header-item {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 25px;
}
</style>
