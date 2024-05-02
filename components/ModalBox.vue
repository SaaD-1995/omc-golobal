<!-- components/Modal.vue -->
<template>
  <div class="fixed z-10 inset-0 overflow-y-auto" :class="{ hidden: !isOpen }">
    <div class="flex items-center justify-center min-h-screen px-4 text-center">
      <div class="fixed inset-0 transition-opacity" @click="closeModal">
        <div class="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div class="bg-white p-8 rounded shadow-lg">
        <div class="mb-4">Modal Content</div>
        <button @click="closeModal">Close</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const openModal = () => {
  isOpen.value = true;
};

const closeModal = () => {
  isOpen.value = false;
};
</script>
