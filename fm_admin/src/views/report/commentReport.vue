<template>
  <div class="background">
    <Sidebar :page="'commentReport'" />
    <div class="main">
      <Topbar :text="'评论举报'" />
      <ListPart v-bind="listPartData" />
    </div>
  </div>
</template>
<script setup>
import ListPart from "../../components/listPart.vue";
import Topbar from "../../components/topbar.vue";
import Sidebar from "../../components/sidebar.vue";
import { ref } from "vue";
import { getReportList, getReport, updateReport } from "../../api/api.js";

const requestData = ref({
  type: 2,
  pageNo: 1,
  pageSize: 10,
});
const getReportInfoList = async () => {
  try {
    const response = await getReportList(requestData);
    console.log("获取评论举报列表返回：", response);
    return response.data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
const getReportInfo = async (id) => {
  try {
    const response = await getReport(id);
    console.log("获取举报信息返回：", response);
    return response.data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
const updateReportInfo = async (id, data) => {
  try {
    const response = await updateReport(id, data);
    return response.data.status;
  } catch (err) {
    console.log(err);
    return null;
  }
};
const listPartData = ref({
  listName: "举报列表",
  headers: ["举报ID", "用户ID", "举报对象ID", "类型", "状态"],
  includedFields: ["id", "userId", "targetId", "type", "status"],
  cardHeaders: ["用户ID", "举报对象ID", "类型", "状态", "内容", "创建时间"],
  cardKeys: ["userId", "targetId", "type", "status", "content", "createTime"],
  updateHeaders: ["状态", "内容"],
  updateKeys: ["status", "content"],
  getList: getReportInfoList,
  getInfo: getReportInfo,
  updateInfo: updateReportInfo,
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
