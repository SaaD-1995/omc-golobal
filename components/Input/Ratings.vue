<template>
  <div class="transition-all duration-1000 group-hover:animate-pulse">
    <section class="flex gap-1">
      <StarIcon class="w-6 h-6 text-yellow-400" v-for="i of rating" />
      <StarIcon
        v-for="i of 5 - rating"
        class="h-6 w-6 text-gray-300 transition-all"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { StarIcon } from "@heroicons/vue/24/solid";
const props = defineProps({
  rating: { type: Number, default: 5 },
});
</script>

<style scoped></style>
