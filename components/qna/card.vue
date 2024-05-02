<template>
  <div
    class="bg-white p-5 rounded-xl transition-all duration-500 cursor-pointer overflow-hidden items-center"
    :class="showFull ? 'min-h-' : 'h-14'"
    @click="showFull = !showFull"
  >
    <section class="flex justify-between items-center mb-7 -mt-2">
      <StoryblokHeading v-for="q of question.question" :heading="q" />
      <MinusIcon v-if="showFull" class="w-5 h-5" />
      <PlusIcon v-else class="w-5 h-5" />
    </section>
    <StoryblokHeading v-for="a of question.answer" :heading="a" />
  </div>
</template>

<script setup lang="ts">
import { PropType, ref } from "vue";
import { qnAQuestion } from "../../types/qnA";
import { MinusIcon, PlusIcon } from "@heroicons/vue/24/solid";
const showFull = ref(false);

const props = defineProps({
  question: { type: Object as PropType<qnAQuestion>, default: null },
});
</script>

<style scoped></style>
