<template>
  <div class="bg-bgAbout py-20 overflow-hidden">
    <div class="screenContainer">
      <StoryblokHeading v-for="heading of blok.heading" :heading="heading" />
      <StoryblokHeading v-for="body of blok.body" :heading="body" class="mt-5" />
      <section class="md:px-6 lg:px-16 mt-14">
        <qnaCard v-for="question of blok.questions" :question="question" class="my-3" />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { qnA } from "../types/qnA";

const props = defineProps({
  blok: { type: Object as PropType<qnA>, default: null },
});
</script>

<style scoped></style>
