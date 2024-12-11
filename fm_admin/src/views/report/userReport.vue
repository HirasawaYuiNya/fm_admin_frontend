<template>
  <div class="background">
    <Sidebar :page="'userReport'" />
    <div class="main">
      <Topbar :text="'用户举报'" />
      <ListPart v-bind="listPartData" />
    </div>
  </div>
</template>
<script setup>
import ListPart from "../../components/listPart.vue";
import Topbar from "../../components/topbar.vue";
import Sidebar from "../../components/sidebar.vue";
import { ref, onMounted } from "vue";

const requestData = ref({
  type: 1,
  typeId: null,
  tagId: null,
  pageNo: 1,
  pageSize: 10,
});
/*
  const getPostInfoList = async () => {
    try {
      const response = await getPostList(requestData);
      listPartData.value.data = response.data.data;
    } catch (err) {
      console.log(err);
    }
  };
  */
const listPartData = ref({
  listName: "举报列表",
  headers: ["举报ID", "用户ID", "标题", "类型"],
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
