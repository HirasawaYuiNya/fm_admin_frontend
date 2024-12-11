<template>
  <div class="background">
    <Sidebar :page="'message'" />
    <div class="main">
      <Topbar :text="'消息管理'" />
      <ListPart v-bind="listPartData" />
    </div>
  </div>
</template>
<script setup>
import ListPart from "../../components/listPart.vue";
import Sidebar from "../../components/sidebar.vue";
import Topbar from "../../components/topbar.vue";
import { ref, onMounted } from "vue";
const listPartData = ref({
  listName: "消息列表",
  headers: ["消息ID", "用户ID", "标题", "类型"],
  includedFields: ["id", "userId", "title", "tagType"],
});
onMounted(() => {});
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
