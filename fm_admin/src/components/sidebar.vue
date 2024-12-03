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
    <div class="sidebar-item" @click="showSub">
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
        :class="{ 'selecte-color': page === 'post', 'rotate-icon': sub_1 }"
        class="sidebar-item-icon small"
      />
    </div>
    <div class="sidebar-item sub" v-if="sub_1">
      <span
        :class="{ 'selecte-color': page === 'post' }"
        class="sidebar-item-text sub-text"
        >悬赏帖子</span
      >
    </div>
    <div class="sidebar-item sub" v-if="sub_1">
      <span
        :class="{ 'selecte-color': page === 'post' }"
        class="sidebar-item-text sub-text"
        >交易帖子</span
      >
    </div>
    <div class="sidebar-item">
      <CommentOutlined
        :class="{ 'selecte-color': page === 'goods' }"
        class="sidebar-item-icon"
      />
      <span
        :class="{ 'selecte-color': page === 'goods' }"
        class="sidebar-item-text"
        >消息管理</span
      >
    </div>
  </div>
</template>
<script setup>
import {
  ContainerOutlined,
  RightOutlined,
  UserOutlined,
  CommentOutlined,
} from "@ant-design/icons-vue";
import { defineProps } from "vue";
import { ref } from "vue";
const props = defineProps({
  page: String,
});
const sub_1 = ref(false);
const showSub = () => {
  sub_1.value = !sub_1.value;
};
</script>
<style scoped>
.sidebar {
  width: 220px;
  height: 910px;
  background-color: #cccccc;
}
.sidebar-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
  height: 80px;
  background-color: #2f436e;
}
.sub {
  height: 60px;
  background-color: #4966a6;
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
.sub-text {
  font-size: 20px;
  margin-left: 40px;
}
.selecte-color {
  color: #66a6ff;
}
.rotate-icon {
  transform: rotate(90deg);
  transition: transform 0.3s ease; /* 添加旋转过渡效果 */
}
</style>
