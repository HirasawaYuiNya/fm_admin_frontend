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
import ListPart from "../../components/listPart.vue";
import Topbar from "../../components/topbar.vue";
import Sidebar from "../../components/sidebar.vue";
import { ref } from "vue";
import { getUserList, getUser, updateUser } from "../../api/api.js";
const requestData = {
  pageNo: 1,
  pageSize: 10,
};

const getUserInfoList = async (pageNo) => {
  if (pageNo !== undefined) requestData.pageNo = pageNo;
  try {
    const response = await getUserList(requestData);
    console.log("获取用户列表返回：", response);
    return response.data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
const getUserInfo = async (request) => {
  try {
    const response = await getUser(request);
    console.log("获取用户数据返回：", response);
    return response.data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
const updateUserInfo = async (id, data) => {
  try {
    const response = await updateUser(id, data);
    console.log("更新用户数据返回：", response);
    return response.data.status;
  } catch (err) {
    console.log(err);
    return null;
  }
};

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
  updateHeaders: ["用户名", "性别", "用户身份"],
  updateKeys: ["username", "gender", "identity"],
  getList: getUserInfoList,
  getInfo: getUserInfo,
  updateInfo: updateUserInfo,
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
