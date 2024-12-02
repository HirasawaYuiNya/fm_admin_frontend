<template>
  <div class="sidebar">
    <div class="sidebar-item">
      <UserOutlined
        :class="{ 'selecte-color': page === 'user' }"
        class="sidebar-item-icon"
      />
      <span
        :class="{ 'selecte-color': page === 'user' }"
        class="sidebar-item-text"
        >用户管理</span
      >
    </div>
    <div class="sidebar-item">
      <ContainerOutlined
        :class="{ 'selecte-color': page === 'post' }"
        class="sidebar-item-icon"
      />
      <span
        :class="{ 'selecte-color': page === 'post' }"
        class="sidebar-item-text"
        >帖子管理</span
      >
      <RightOutlined
        :class="{ 'selecte-color': page === 'post' }"
        class="sidebar-item-icon small"
      />
    </div>
    <div class="sidebar-item">
      <ContainerOutlined
        :class="{ 'selecte-color': page === 'goods' }"
        class="sidebar-item-icon"
      />
      <span
        :class="{ 'selecte-color': page === 'goods' }"
        class="sidebar-item-text"
        >商品管理</span
      >
    </div>
  </div>
</template>
<script setup>
import {
  ContainerOutlined,
  RightOutlined,
  UserOutlined,
} from "@ant-design/icons-vue";
import { defineProps } from "vue";
const props = defineProps({
  page: String,
});
</script>
<style scoped>
.sidebar {
  width: 220px;
  height: 910px;
  background-color: #cccccc;
}
.sidebar-item {
  display: flex; /* 使用 Flexbox 布局 */
  align-items: center; /* 竖直居中 */
  justify-content: flex-start; /* 水平居左（也可以控制与左侧的距离） */
  padding-left: 20px; /* 距离左侧 20px */
  height: 80px;
  background-color: #2f436e;
}
.sidebar-item-icon {
  font-size: 30px;
  color: white;
}
.small {
  margin-left: 18px;
  font-size: 18px;
}
.sidebar-item-text {
  font-size: 22px;
  color: white;
  margin-left: 20px;
  letter-spacing: 3px;
}
.selecte-color {
  color: #66a6ff;
}
</style>
