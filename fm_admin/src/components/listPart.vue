<template>
  <div class="listPart">
    <div class="topbar">
      <span class="topbar-text">{{ listName }}</span>
      <div class="topbar-search">
        <SearchOutlined
          class="topbar-search-icon"
          @click="getInfoData(searchId)"
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
              @click="getInfoData(item[includedFields[0]])"
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
      <div
        v-if="!updateStatus"
        v-for="(header, idx) in cardHeaders"
        :key="idx"
        class="card-item"
      >
        <div class="card-item-content">
          <strong>{{ header }}:</strong>
          <span>{{ infoData[cardKeys[idx]] }}</span>
        </div>
      </div>
      <div
        v-if="updateStatus"
        v-for="(header, idx) in updateHeaders"
        :key="idx"
        class="card-item"
      >
        <div class="card-item-content">
          <strong>{{ header }}:</strong>
          <input
            :value="updateData[updateKeys[idx]]"
            @input="handleInput($event, idx)"
            class="update-input"
          />
        </div>
      </div>
      <template #update>
        <EditOutlined
          class="update-icon"
          v-if="!updateStatus"
          @click="changeUpdateStatus"
        />
        <CheckOutlined
          class="update-icon"
          v-if="updateStatus"
          @click="update"
        />
        <CloseOutlined
          class="update-icon"
          v-if="updateStatus"
          @click="changeUpdateStatus"
        />
      </template>
    </InfoCard>
    <div class="pageController">
      <LeftOutlined class="page-icon" @click="previousPage" />
      <span class="page-text"
        >{{ listData.pages }}/
        {{
          listData.total ? Math.floor((listData.total - 1) / 10) + 1 : ""
        }}</span
      >
      <RightOutlined class="page-icon" @click="nextPage" />
    </div>
  </div>
</template>
<script setup>
import {
  CheckOutlined,
  CloseOutlined,
  EditOutlined,
  LeftOutlined,
  RightOutlined,
  SearchOutlined,
} from "@ant-design/icons-vue";
import { ref, onMounted } from "vue";
import { LoadingOutlined } from "@ant-design/icons-vue";
import InfoCard from "./infoCard.vue";
import { showAlert } from "../utils/alertService";
const dataReceived = ref(false);
const show_card = ref(false);
const listData = ref({});
const infoData = ref({});
const searchId = ref("");
const updateStatus = ref(false);
const updateData = ref({});
const cardID = ref("");
const props = defineProps({
  listName: String,
  headers: Array,
  cardHeaders: Array,
  cardKeys: Array,
  updateHeaders: Array,
  updateKeys: Array,
  includedFields: Array,
  getList: Function,
  getInfo: Function,
  updateInfo: Function,
});
const {
  listName,
  headers,
  includedFields,
  cardHeaders,
  cardKeys,
  updateHeaders,
  updateKeys,
} = props;
const changeUpdateStatus = () => {
  updateStatus.value = !updateStatus.value;
  updateData.value = { ...infoData.value };
};
const update = async () => {
  await updateInfoData(cardID.value, updateData.value);
  show_card.value = false;
};
const getListData = async (page) => {
  listData.value = await props.getList(page);
  dataReceived.value = true;
};
const getInfoData = async (id) => {
  infoData.value = await props.getInfo(id);
  if (infoData.value == null) {
    showAlert("搜索内容不存在", "error");
    return;
  }
  cardID.value = id;
  show_card.value = true;
};
const updateInfoData = async (id, data) => {
  const _data = Object.assign({}, data);
  console.log(_data);
  updateStatus.value = await props.updateInfo(id, _data);
  if (updateStatus.value) {
    showAlert("更新失败", "error");
    return;
  }
  showAlert("更新成功", "success");
};
//将输入数据处理为对应的类型
const handleInput = (event, idx) => {
  const value = event.target.value;
  const key = updateKeys[idx];

  // 根据原始类型进行转换
  if (typeof updateData.value[key] === "number") {
    updateData.value[key] = Number(value); // 转换为数字
  } else if (typeof updateData.value[key] === "boolean") {
    updateData.value[key] = value === "true"; // 转换为布尔值
  } else {
    updateData.value[key] = value; // 保持为字符串
  }
};
const previousPage = () => {
  if (listData.value.pages === 1) {
    showAlert("已经是第一页了", "info");
    return;
  }
  getListData(listData.value.pages - 1);
};
const nextPage = () => {
  console.log(listData.value.pages, listData.value.total / 10);
  if (listData.value.pages >= listData.value.total / 10) {
    showAlert("已经是最后一页了", "info");
    return;
  }
  getListData(listData.value.pages + 1);
};
onMounted(() => {
  getListData(1);
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
.update-icon {
  font-size: 40px;
  padding-right: 30px;
  cursor: pointer;
}
.update-input {
  height: 22px;
  font-size: 18px;
}
</style>
