<template>
  <div
    class="bg-white cardSm rounded-2xl flex flex-col md:flex-row justify-between md:items-center"
  >
    <div class="border-[1px] border-primary px-4 py-2 rounded-md">
      <section class="flex gap-2 items-center">
        <NuxtImg width="32" src="/images/google.png" format="webp" />
        <p class="mt-1 text-xl font-medium">4.9 from over 50 reviews</p>
      </section>
      <!-- <section class="flex items-center gap-3 mt-2">
        <p class="text-2xl">4.9</p>
        <article class="flex gap-1">
          <StarIcon v-for="i of 5" :key="i" class="h-5 w-5 text-yellow-400" />
        </article>
        <p class="text-lg text-gray-700">1,200 Reviews</p>
      </section> -->
    </div>

    <div class="mt-5 md:mt-0">
      <StoryblokBtn v-for="button of buttons" :button="button" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storyblokButton } from "../../types/storyblokMain";
import { PropType } from "vue";

const props = defineProps({
  buttons: { type: Array as PropType<storyblokButton[]>, default: [] },
});
</script>

<style scoped></style>
