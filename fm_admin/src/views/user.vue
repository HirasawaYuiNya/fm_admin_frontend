<template>
  <div class="background">
    <Sidebar :page="'user'" />
    <div class="main">
      <Topbar :text="'用户管理'" />
      <ListPart :listName="'用户列表'" />
    </div>
  </div>
</template>
<script setup>
import ListPart from "../components/listPart.vue";
import Sidebar from "../components/sidebar.vue";
import Topbar from "../components/topbar.vue";
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
