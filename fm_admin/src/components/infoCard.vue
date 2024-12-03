<template>
  <div class="overlay">
    <div class="card"></div>
  </div>
</template>

<script setup></script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* 背景色为半透明黑 */
  backdrop-filter: brightness(70%); /* 使用 backdrop-filter 调低背景亮度 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
}

.card {
  position: relative;
  width: 800px;
  height: 600px;
  background-color: #ffffff;
  transition: filter 0.3s ease;
  z-index: 10;
}
</style>
