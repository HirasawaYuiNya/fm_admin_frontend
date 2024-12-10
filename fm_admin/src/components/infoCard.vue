<template>
  <div class="overlay">
    <div class="card">
      <CloseOutlined class="close-icon" @click="closeCard" />
      <div class="card-content">
        <slot>
          <p>No content provided.</p>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CloseOutlined } from "@ant-design/icons-vue";
const emit = defineEmits(["close"]);
const closeCard = () => {
  emit("close");
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: brightness(70%);
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
  z-index: 10;
  border-radius: 8px;
}

.close-icon {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 30px;
  cursor: pointer;
  color: #000000;
  transition: color 0.3s ease;
}
.close-icon:hover {
  color: #2f436e;
}
.card-content {
  margin-top: 30px;
  margin-left: 30px;
  width: 600px;
  height: 520px;
}
</style>
