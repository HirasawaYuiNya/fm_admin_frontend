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
        <tr v-for="n in 10" :key="n" class="row">
          <th v-for="(header, index) in data" :key="index">{{ header }}</th>
          <th class="extra" @click="showCard">查看</th>
        </tr>
      </tbody>
    </table>
  </div>
  <InfoCard v-if="show_card" />
</template>
<script setup>
import { ref } from "vue";
import { defineProps } from "vue";
import InfoCard from "./infoCard.vue";
const show_card = ref(false);
const data = ref(["data1", "data2", "data3", "data4"]);
const props = defineProps({
  headers: Array,
});
const { headers } = props;
const showCard = () => {
  show_card.value = true;
};
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
</style>
