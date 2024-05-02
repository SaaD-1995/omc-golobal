<template>
  <div
    class="flex justify-center cardSm w-full bg-white rounded-2xl items-center gap-5"
  >
    <StoryblokBtn v-for="button of actions" :button="button" />
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { storyblokButton } from "../../types/storyblokMain";

const props = defineProps({
  actions: { type: Array as PropType<storyblokButton[]>, default: [] },
});
</script>

<style scoped></style>
