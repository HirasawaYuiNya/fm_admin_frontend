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
import { getPost, getPostList, updatePost } from "../../api/api.js";
const requestData = {
  type: null,
  typeId: null,
  tagId: null,
  pageNo: 1,
  pageSize: 10,
};
const getPostInfoList = async () => {
  try {
    const response = await getPostList(requestData);
    return response.data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
const getPostInfo = async (request) => {
  try {
    const response = await getPost(request);
    return response.data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
const updatePostInfo = async (id, data) => {
  try {
    const response = await updatePost(id, data);
    console.log(response.data);
    return response.data.status;
  } catch (err) {
    console.log(err);
    return null;
  }
};
const listPartData = ref({
  listName: "帖子列表",
  headers: ["帖子ID", "用户ID", "标题", "类型"],
  includedFields: ["id", "userId", "title", "tagType"],
  cardHeaders: [
    "用户ID",
    "标题",
    "内容",
    "点赞数",
    "收藏数",
    "评论数",
    "更新时间",
    "帖子类型",
    "状态",
  ],
  cardKeys: [
    "userId",
    "title",
    "content",
    "likeCount",
    "commentCount",
    "favoriteCount",
    "updateTime",
    "type",
    "status",
  ],
  updateHeaders: ["标题", "内容", "状态"],
  updateKeys: ["title", "content", "status"],
  getList: getPostInfoList,
  getInfo: getPostInfo,
  updateInfo: updatePostInfo,
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
