<template>
  <div
    v-if="visible"
    class="alert-container"
    :class="[type]"
    @click="closeAlert"
  >
    <p class="alert-message">{{ message }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  message: { type: String, default: "" },
  type: { type: String, default: "info" },
  duration: { type: Number, default: 3000 },
});

const emit = defineEmits(["close"]);

const visible = ref(false);

onMounted(() => {
  visible.value = true;
  setTimeout(() => {
    closeAlert();
  }, props.duration);
});

function closeAlert() {
  visible.value = false;
  emit("close");
}
</script>

<style scoped>
.alert-container {
  height: 60px;
  width: 200px;
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  z-index: 10;
  border-radius: 5px;
  font-size: 18px;
  color: #fff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: slide-down 0.3s ease-out;
}

.alert-container.info {
  background-color: #2196f3;
}

.alert-container.success {
  background-color: #4caf50;
}

.alert-container.error {
  background-color: #f44336;
}

@keyframes slide-down {
  from {
    top: -50px;
  }
  to {
    top: 20px;
  }
}
</style>
