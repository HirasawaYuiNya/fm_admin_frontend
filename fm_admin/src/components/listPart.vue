<template>
  <div class="listPart">
    <div class="topbar">
      <span class="topbar-text">{{ listName }}</span>
      <div class="topbar-search">
        <SearchOutlined
          class="topbar-search-icon"
          @click="searchById(searchId)"
        />
        <input
          type="text"
          class="topbar-search-input"
          placeholder="输入ID查询"
          v-model="searchId"
        />
      </div>
    </div>
    <div class="table-container">
      <table>
        <thead>
          <tr class="head">
            <th v-for="(header, index) in headers" :key="index">
              {{ header }}
            </th>
            <th class="extra">详细信息</th>
          </tr>
        </thead>
        <tbody v-if="dataReceived">
          <tr v-for="(item, index) in listData.list" :key="index" class="row">
            <td class="dataText" v-for="key in includedFields" :key="key">
              {{ item[key] }}
            </td>
            <th
              class="extra pointer"
              @click="showCard(item[includedFields[0]])"
            >
              查看
            </th>
          </tr>
        </tbody>
        <tbody v-else>
          <LoadingOutlined class="loading-icon" />
        </tbody>
      </table>
    </div>
    <InfoCard v-if="show_card" @close="show_card = false">
      <div v-for="(header, idx) in cardHeaders" :key="idx" class="card-item">
        <div class="card-item-content">
          <strong>{{ header }}:</strong>
          <span>{{ infoData[cardKeys[idx]] }}</span>
        </div>
      </div>
    </InfoCard>
    <div class="pageController">
      <LeftOutlined class="page-icon" />
      <span class="page-text">{{ listData.pages }}/{{ listData.total }}</span>
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
import { ref, onMounted } from "vue";
import { LoadingOutlined } from "@ant-design/icons-vue";
import InfoCard from "./infoCard.vue";
const dataReceived = ref(false);
const show_card = ref(false);
const listData = ref({});
const infoData = ref({});
const searchId = ref("");
const props = defineProps({
  listName: String,
  headers: Array,
  cardHeaders: Array,
  cardKeys: Array,
  includedFields: Array,
  getList: Function,
  getInfo: Function,
});
const { listName, headers, includedFields, cardHeaders, cardKeys } = props;
const showCard = (id) => {
  getInfoData(id);
  show_card.value = true;
};
const getListData = async () => {
  listData.value = await props.getList();
  dataReceived.value = true;
};
const getInfoData = async (id) => {
  infoData.value = await props.getInfo(id);
};
const searchById = (id) => {
  getInfoData(id);
  show_card.value = true;
};
onMounted(() => {
  getListData();
});
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
.table-container {
  background-color: #ffffff;

  width: 1200px;
  height: 574px;
  margin-top: 30px;
  margin-left: 100px;

  display: flex;
  flex-direction: column;
}
tr {
  width: 1200px;
  height: 50px;
}
.head {
  background-color: #d6d6d6;
}
.row {
  background-color: #f7f7f7;
}
.extra {
  width: 120px;
}
.pointer {
  cursor: pointer;
}
.dataText {
  text-align: center;
}
.loading-icon {
  position: absolute;
  font-size: 180px;
  top: 50%;
  left: 50%;
  color: #cccccc;
}
.card-item {
  margin-bottom: 25px;
}
.card-item-content {
  display: flex;
  align-items: flex-start;
  font-size: 18px;
}
.card-item-content strong {
  margin-right: 20px;
}
</style>
