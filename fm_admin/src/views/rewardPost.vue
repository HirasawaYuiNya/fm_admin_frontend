<template>
  <div class="background">
    <Sidebar :page="'rewardPost'" />
    <div class="main">
      <Topbar :text="'帖子管理'" />
      <ListPart v-bind="listPartData" />
    </div>
  </div>
</template>
<script setup>
import ListPart from "../components/listPart.vue";
import Sidebar from "../components/sidebar.vue";
import Topbar from "../components/topbar.vue";
import { ref, onMounted } from "vue";
import { getPostList } from "../api/api.js";
const listPartData = ref({
  listName: "帖子列表",
  headers: ["帖子ID", "用户ID", "标题", "类型"],
  includedFields: ["id", "userId", "title", "tagType"],
  data: {
    list: [],
    total: 0,
    pages: 0,
  },
});
const requestData = ref({
  type: 0,
  typeId: null,
  tagId: null,
  pageNo: 1,
  pageSize: 10,
});
const getPostInfoList = async () => {
  try {
    const response = await getPostList(requestData);
    console.log(response);
    listPartData.value.data = response.data.data;
  } catch (err) {
    console.log(err);
  }
};
console.log("Reward Post Page Loaded");
onMounted(() => {
  getPostInfoList();
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
