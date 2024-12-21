<template>
  <div class="background">
    <Sidebar :page="'tradePost'" />
    <div class="main">
      <Topbar :text="'交易帖子'" />
      <ListPart v-bind="listPartData" />
    </div>
  </div>
</template>
<script setup>
import ListPart from "../../components/listPart.vue";
import Topbar from "../../components/topbar.vue";
import Sidebar from "../../components/sidebar.vue";
import { ref } from "vue";
import { getPostList, getPost, updatePost } from "../../api/api.js";

const requestData = {
  type: 1,
  typeId: null,
  tagId: null,
  pageNo: 1,
  pageSize: 10,
};
const getPostInfoList = async () => {
  try {
    const response = await getPostList(requestData);
    console.log("获取交易帖子列表返回：", response);
    return response.data.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
const getPostInfo = async (request) => {
  try {
    const response = await getPost(request);
    console.log("获取交易帖子信息返回：", response);
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
  ],
  updateHeaders: ["标题", "内容", "状态"],
  updateKeys: ["title", "content", "status"],
  getList: getPostInfoList,
  getInfo: getPostInfo,
  updateInfo: updatePostInfo,
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
