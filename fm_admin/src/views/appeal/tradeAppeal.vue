<template>
  <div class="background">
    <Sidebar :page="'tradeAppeal'" />
    <div class="main">
      <Topbar :text="'交易申诉'" />
      <ListPart v-bind="listPartData" />
    </div>
  </div>
</template>
<script setup>
import ListPart from "../../components/listPart.vue";
import Topbar from "../../components/topbar.vue";
import Sidebar from "../../components/sidebar.vue";
import { ref } from "vue";
import { getAppealList, getAppeal, updateAppeal } from "../../api/api.js";

const requestData = {
  type: 1,
  pageNo: 1,
  pageSize: 10,
};
const getAppealInfoList = async () => {
  try {
    const response = await getAppealList(requestData);
    console.log("获取悬赏订单申诉列表返回：", response);
    return response.data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
const getAppealInfo = async (id) => {
  try {
    const response = await getAppeal(id);
    console.log("获取悬赏订单申诉信息返回：", response);
    return response.data.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
const updateAppealInfo = async (id, data) => {
  try {
    const response = await updateAppeal(id, data);
    return response.data.status;
  } catch (err) {
    console.log(err);
    return null;
  }
};
const listPartData = ref({
  listName: "申诉列表",
  headers: ["申诉ID", "用户ID", "订单ID", "类型", "状态"],
  includedFields: ["id", "userId", "orderId", "type", "status"],
  cardHeaders: ["用户ID", "订单ID", "类型", "状态", "内容", "创建时间"],
  cardKeys: ["userId", "orderId", "type", "status", "content", "createTime"],
  updateHeaders: ["状态", "内容"],
  updateKeys: ["status", "content"],
  getList: getAppealInfoList,
  getInfo: getAppealInfo,
  updateInfo: updateAppealInfo,
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
