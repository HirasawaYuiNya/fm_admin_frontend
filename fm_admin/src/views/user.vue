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
import { ref } from "vue";
const listPartData = ref({
  listName: "用户列表",
  headers: ["用户ID", "手机号", "用户名", "用户身份"],
  pageNo: 1,
  pageSize: 10,
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
