<template>
  <div class="background">
    <Sidebar :page="'rewardPost'" />
    <div class="main">
      <Topbar :text="'悬赏帖子'" />
      <ListPart v-bind="listPartData" />
    </div>
  </div>
</template>
<script setup>
import ListPart from "../../components/listPart.vue";
import Topbar from "../../components/topbar.vue";
import Sidebar from "../../components/sidebar.vue";
import { ref, onMounted } from "vue";
import { getPostList } from "../../api/api.js";
const requestData = ref({
  type: 1,
  typeId: null,
  tagId: null,
  pageNo: 1,
  pageSize: 10,
});

const getPostInfoList = async (request = requestData) => {
  try {
    const response = await getPostList(request);
    return response.data.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const listPartData = ref({
  listName: "帖子列表",
  headers: ["帖子ID", "用户ID", "标题", "类型"],
  includedFields: ["id", "userId", "title", "tagType"],
  getList: getPostInfoList,
});

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
