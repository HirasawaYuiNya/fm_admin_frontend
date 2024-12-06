<template>
  <div class="table-container">
    <table>
      <thead>
        <tr class="head">
          <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
          <th class="extra">详细信息</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-if="dataReceived"
          v-for="(item, index) in receivedData"
          :key="index"
          class="row"
        >
          <td class="dataText" v-for="key in includedFields" :key="key">
            {{ item[key] }}
          </td>
          <th class="extra pointer" @click="showCard">查看</th>
        </tr>
        <tr v-else>
          Loding...
        </tr>
      </tbody>
    </table>
  </div>
  <InfoCard v-if="show_card" @close="show_card = false" />
</template>
<script setup>
import { ref, watch } from "vue";
import InfoCard from "./infoCard.vue";
const dataReceived = ref(false);
const receivedData = ref([]);
const show_card = ref(false);
const props = defineProps({
  headers: Array,
  includedFields: Array,
  data: Array,
});
const { headers, includedFields } = props;
const showCard = () => {
  show_card.value = true;
};
watch(
  () => props.data,
  (newVal) => {
    receivedData.value = newVal;
    dataReceived.value = true;
  }
);
</script>
<style scoped>
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
</style>
