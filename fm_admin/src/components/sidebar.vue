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
          'selecte-color': pageType(page) === 'post',
        }"
        class="sidebar-item-icon"
      />
      <span
        :class="{
          'selecte-color': pageType(page) === 'post',
        }"
        class="sidebar-item-text"
        >帖子管理</span
      >
      <RightOutlined
        :class="{
          'selecte-color': pageType(page) === 'post',
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
    <div class="sidebar-item" @click="goPage('message')">
      <CommentOutlined
        :class="{ 'selecte-color': page === 'message' }"
        class="sidebar-item-icon"
      />
      <span
        :class="{ 'selecte-color': page === 'message' }"
        class="sidebar-item-text"
        >消息管理</span
      >
    </div>
    <div class="sidebar-item" @click="showSub('2')">
      <ExclamationCircleOutlined
        :class="{ 'selecte-color': pageType(page) === 'report' }"
        class="sidebar-item-icon"
      />
      <span
        :class="{ 'selecte-color': pageType(page) === 'report' }"
        class="sidebar-item-text"
        >举报管理</span
      >
      <RightOutlined
        :class="{
          'selecte-color': pageType(page) === 'report',
          'rotate-icon': sub_2,
        }"
        class="sidebar-item-icon small"
      />
    </div>
    <div class="sidebar-item sub" v-if="sub_2" @click="goPage('userReport')">
      <span
        :class="{ 'selecte-color': page === 'userReport' }"
        class="sidebar-item-text sub-text"
        >用户举报</span
      >
    </div>
    <div class="sidebar-item sub" v-if="sub_2" @click="goPage('postReport')">
      <span
        :class="{ 'selecte-color': page === 'postReport' }"
        class="sidebar-item-text sub-text"
        >帖子举报</span
      >
    </div>
    <div class="sidebar-item sub" v-if="sub_2" @click="goPage('commentReport')">
      <span
        :class="{ 'selecte-color': page === 'commentReport' }"
        class="sidebar-item-text sub-text"
        >评论举报</span
      >
    </div>
    <div class="sidebar-item" @click="showSub('3')">
      <QuestionCircleOutlined
        :class="{ 'selecte-color': pageType(page) === 'appeal' }"
        class="sidebar-item-icon"
      />
      <span
        :class="{ 'selecte-color': pageType(page) === 'appeal' }"
        class="sidebar-item-text"
        >申诉管理</span
      >
      <RightOutlined
        :class="{
          'selecte-color': pageType(page) === 'appeal',
          'rotate-icon': sub_3,
        }"
        class="sidebar-item-icon small"
      />
    </div>
    <div class="sidebar-item sub" v-if="sub_3" @click="goPage('rewardAppeal')">
      <span
        :class="{ 'selecte-color': page === 'rewardAppeal' }"
        class="sidebar-item-text sub-text"
        >悬赏申诉</span
      >
    </div>
    <div class="sidebar-item sub" v-if="sub_3" @click="goPage('tradeAppeal')">
      <span
        :class="{ 'selecte-color': page === 'tradeAppeal' }"
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
const pageType = (page) => {
  switch (true) {
    case ["rewardPost", "tradePost"].includes(page):
      return "post";
    case ["userReport", "postReport", "commentReport"].includes(page):
      return "report";
    case ["rewardAppeal", "tradeAppeal"].includes(page):
      return "appeal";
    default:
      return page;
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
