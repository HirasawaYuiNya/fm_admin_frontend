<template>
  <div class="listPart">
    <div class="topbar">
      <span class="topbar-text">{{ listName }}</span>
      <div class="topbar-search">
        <SearchOutlined class="topbar-search-icon" />
        <input
          type="text"
          class="topbar-search-input"
          placeholder="输入ID查询"
        />
      </div>
    </div>
    <TablePart v-bind="tableData" />
    <div class="pageController">
      <LeftOutlined class="page-icon" />
      <span class="page-text">{{ data.pages }}/{{ data.total }}</span>
      <RightOutlined class="page-icon" />
    </div>
  </div>
</template>
<script setup>
import {
  LeftOutlined,
  RightOutlined,
  SearchOutlined,
} from "@ant-design/icons-vue";
import TablePart from "./tablePart.vue";
import { ref, watch, computed } from "vue";
const props = defineProps({
  listName: String,
  headers: Array,
  includedFields: Array,
  data: Object,
});
const { listName, headers, data, includedFields } = props;
const tableData = ref({
  headers: headers,
  includedFields: includedFields,
  data: data.list,
});
watch(
  () => props.data,
  (newVal) => {
    tableData.value.data = newVal.list;
  }
);
</script>
<style scoped>
.listPart {
  width: 1420px;
  height: 760px;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
}
.topbar {
  width: 1340px;
  background-color: #cccccc;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 40px;
  gap: 80px;
}
.topbar-text {
  font-size: 25px;
  color: black;
}
.topbar-search {
  width: 300px;
  height: 45px;
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
}
.topbar-search-icon {
  font-size: 30px;
  color: #000;
  margin-left: 10px;
}
.topbar-search-input {
  height: 35px;
  width: 240px;
  margin-left: 10px;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: #f0f0f0;
}
.pageController {
  width: 1420px;
  height: 70px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
.page-icon {
  font-size: 28px;
  color: #4e5969;
  cursor: pointer;
}
.page-text {
  font-size: 22px;
  color: #000000;
}
</style>
