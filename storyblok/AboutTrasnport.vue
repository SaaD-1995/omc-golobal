<template>
  <div class="bg-bgAbout overflow-hidden">
    <div class="screenContainer pt-20 pb-20">
      <section data-aos="zoom-in-down" data-aos-duration="2000">
        <StoryblokHeading
          class="md:mb-2 md:px-28 lg:px-28"
          v-for="heading of blok.headings"
          :heading="heading"
        />
        <StoryblokHeading
          class="mb-5"
          v-for="heading of blok.colorHeadings"
          :heading="heading"
        />
      </section>

      <section
        class="grid items-start gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 mt-10"
      >
        <TransportCard v-for="card of blok.aboutCards" :cardDetails="card" />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue";
import { storyblokAboutTrasnport } from "../types/aboutTrasnport";
import TransportCard from "../components/TransportCard.vue";
const props = defineProps({
  blok: {
    type: Object as PropType<storyblokAboutTrasnport>,
    default: null,
  },
});
</script>
