<template>
  <div class="background">
    <Sidebar :page="'user'" />
    <div class="main">
      <Topbar :text="'用户管理'" />
      <ListPart v-bind="listPartData" />
    </div>
  </div>
</template>
<script setup>
import ListPart from "../components/listPart.vue";
import Sidebar from "../components/sidebar.vue";
import Topbar from "../components/topbar.vue";
import { ref, onMounted } from "vue";
import { getUserList, getUser } from "../api/api.js";
const listPartData = ref({
  listName: "用户列表",
  headers: ["用户ID", "手机号", "用户名", "用户身份"],
  includedFields: ["id", "phone", "username", "identity"],
  cardHeaders: ["用户名", "手机号", "性别", "用户身份", "头像位置", "密码"],
  cardKeys: [
    "username",
    "phone",
    "gender",
    "identity",
    "avatarUrl",
    "password",
  ],
  data: {
    list: [],
    total: 0,
    pages: 0,
  },
  userData: {},
});
const requestData = ref({
  pageNo: 1,
  pageSize: 10,
});
const getUserInfoList = async () => {
  try {
    const response = await getUserList(requestData);
    listPartData.value.data = response.data.data;
  } catch (err) {
    console.log(err);
  }
};
const getUserInfo = async () => {
  try {
    const response = await getUser("1");
    listPartData.value.userData = response.data.data;
  } catch (err) {
    console.log(err);
  }
};
onMounted(() => {
  getUserInfoList();
  getUserInfo();
});
</script>
<style scoped>
.background {
  display: flex;
}
.main {
  display: flex;
  flex-direction: column;
}
</style>
