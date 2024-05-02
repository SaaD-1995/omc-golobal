<template>
  <div
    class="h-screen w-screen bg-[#e6e6e6] overflow-hidden fixed top-0 left-0 z-[9999] flex justify-center items-center flex-col"
  >
    <NuxtImg src="/images/omlogo2.webp" class="w-40 animate-fade-out" format="webp" />
  </div>
</template>

<script setup></script>

<style scoped>
@keyframes fadeOut {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  20% {
    opacity: 0.6;
    transform: scale(0.9);
  }
  50% {
    opacity: 0.2;
    transform: scale(1.3);
  }
  80% {
    opacity: 0.6;
    transform: scale(1.5);
  }
  100% {
    opacity: 0;
    transform: scale(1);
  }
}

.animate-fade-out {
  animation: fadeOut 1s ease-in-out forwards;
}
</style>
