<template>
  <div class="sidebar">
    <div class="sidebar-item" @click="goPage('user')">
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
    <div class="sidebar-item" @click="showSub('1')">
      <ContainerOutlined
        :class="{
          'selecte-color': page === 'rewardPost' || page === 'tradePost',
        }"
        class="sidebar-item-icon"
      />
      <span
        :class="{
          'selecte-color': page === 'rewardPost' || page === 'tradePost',
        }"
        class="sidebar-item-text"
        >帖子管理</span
      >
      <RightOutlined
        :class="{
          'selecte-color': page === 'rewardPost' || page === 'tradePost',
          'rotate-icon': sub_1,
        }"
        class="sidebar-item-icon small"
      />
    </div>
    <div class="sidebar-item sub" v-if="sub_1" @click="goPage('rewardPost')">
      <span
        :class="{
          'selecte-color': page === 'rewardPost',
        }"
        class="sidebar-item-text sub-text"
        >悬赏帖子</span
      >
    </div>
    <div class="sidebar-item sub" v-if="sub_1" @click="goPage('tradePost')">
      <span
        :class="{ 'selecte-color': page === 'tradePost' }"
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
    <div class="sidebar-item" @click="showSub('2')">
      <ExclamationCircleOutlined
        :class="{ 'selecte-color': page === 'report' }"
        class="sidebar-item-icon"
      />
      <span
        :class="{ 'selecte-color': page === 'report' }"
        class="sidebar-item-text"
        >举报管理</span
      >
      <RightOutlined
        :class="{ 'selecte-color': page === 'report', 'rotate-icon': sub_2 }"
        class="sidebar-item-icon small"
      />
    </div>
    <div class="sidebar-item sub" v-if="sub_2">
      <span
        :class="{ 'selecte-color': page === 'report' }"
        class="sidebar-item-text sub-text"
        >用户举报</span
      >
    </div>
    <div class="sidebar-item sub" v-if="sub_2">
      <span
        :class="{ 'selecte-color': page === 'report' }"
        class="sidebar-item-text sub-text"
        >帖子举报</span
      >
    </div>
    <div class="sidebar-item sub" v-if="sub_2">
      <span
        :class="{ 'selecte-color': page === 'report' }"
        class="sidebar-item-text sub-text"
        >评论举报</span
      >
    </div>
    <div class="sidebar-item" @click="showSub('3')">
      <QuestionCircleOutlined
        :class="{ 'selecte-color': page === 'appeal' }"
        class="sidebar-item-icon"
      />
      <span
        :class="{ 'selecte-color': page === 'appeal' }"
        class="sidebar-item-text"
        >申诉管理</span
      >
      <RightOutlined
        :class="{ 'selecte-color': page === 'appeal', 'rotate-icon': sub_3 }"
        class="sidebar-item-icon small"
      />
    </div>
    <div class="sidebar-item sub" v-if="sub_3">
      <span
        :class="{ 'selecte-color': page === 'appeal' }"
        class="sidebar-item-text sub-text"
        >悬赏申诉</span
      >
    </div>
    <div class="sidebar-item sub" v-if="sub_3">
      <span
        :class="{ 'selecte-color': page === 'appeal' }"
        class="sidebar-item-text sub-text"
        >交易申诉</span
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
  ExclamationCircleOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons-vue";
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
const route = useRoute();
const router = useRouter();
const props = defineProps({
  page: String,
});
const sub_1 = ref(false);
const sub_2 = ref(false);
const sub_3 = ref(false);
const initializeState = () => {
  sub_1.value = route.query.sub_1 === "true";
  sub_2.value = route.query.sub_2 === "true";
  sub_3.value = route.query.sub_3 === "true";
};
const showSub = (subNo) => {
  switch (subNo) {
    case "1":
      sub_1.value = !sub_1.value;
      break;
    case "2":
      sub_2.value = !sub_2.value;
      break;
    case "3":
      sub_3.value = !sub_3.value;
      break;
  }
};
onMounted(() => {
  initializeState();
});
const goPage = (pagename) => {
  router.push({
    name: pagename,
    query: { sub_1: sub_1.value, sub_2: sub_2.value, sub_3: sub_3.value },
  });
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
  cursor: pointer;
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
