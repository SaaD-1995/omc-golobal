<template>
  <div class="relative pt-20 pb-20 overflow-hidden">
    <div
      class="absolute inset-0 bg-gradient-to-r from-[rgba(199,209,1,0.49)] via-[#B1E34C] to-[#4BAE31] opacity-20"
    ></div>
    <div class="flex justify-center" data-aos="zoom-in-down" data-aos-duration="2000">
      <StoryblokHeading
        class="mb-5"
        v-for="heading of blok.headings"
        :heading="heading"
      />
      <StoryblokHeading
        class="mb-5 ms-2 lg:ms-4"
        v-for="heading of blok.colorHeadings"
        :heading="heading"
      />
    </div>
    <div>
      <StoryblokHeading
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        class="mb-5 px-5 sm:px-10 md:px-32 lg:px-52 xl:px-80"
        v-for="heading of blok.bodyHeadings"
        :heading="heading"
      />
    </div>
    <div
      class="flex justify-center mt-5 z-20 relative"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="2000"
    >
      <StoryblokBtn v-for="button of blok.buttons" class="py-3 px-5" :button="button" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import { storyblokCalltoActions } from "../types/calltoactions";
const props = defineProps({
  blok: {
    type: Object as PropType<storyblokCalltoActions>,
    default: null,
  },
});
</script>
