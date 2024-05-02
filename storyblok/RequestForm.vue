<template>
  <div class="screenContainer pt-32 pb-20">
    <StoryblokHeading class="mt-3" v-for="heading of blok.headings" :heading="heading" />
    <request-call-back-form></request-call-back-form>
  </div>
</template>

<script setup lang="ts">
import PropType from "vue";
import storyblokRequestForm from "../types/requestForm";
const props = defineProps({
  blok: {
    type: Object as PropType<storyblokRequestForm>,
    default: null,
  },
});
</script>
