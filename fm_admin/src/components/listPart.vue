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
  </div>
</template>
<script setup>
import { SearchOutlined } from "@ant-design/icons-vue";

const props = defineProps({
  listName: String,
});
</script>
<style scoped>
.listPart {
  width: 1420px;
  height: 760px;
  background-color: #f0f0f0;
  display: flex;
}
.topbar {
  width: 1420px;
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
</style>
