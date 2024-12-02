<template>
  <div class="topbar">
    <span class="topbar-text">{{ text }}</span>
  </div>
</template>
<script setup>
const props = defineProps({
  text: String,
});
</script>
<style scoped>
.topbar {
  width: 1320px;
  height: 120px;
  background-color: #ffffff;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 30px 0 0 100px;
}
.topbar-text {
  font-size: 30px;
  color: black;
}
</style>
