<template>
  <div class="screenContainer pt-10 pb-14 overflow-hidden">
    <!-- <pre class="text-black">{{ blok }}</pre> -->
    <!-- <div class="grid grid-cols-12 gap-4">
      <div class="col-span-12 md:col-span-6 lg:col-span-4"> md:w-[330px] lg:w-[320px] xl:w-[350px]-->
    <section
      class="grid items-start gap-5 mt-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3"
    >
      <ServiceCard
        v-for="card in blok.servicesCard"
        :card="card"
        class="me-5 sm:me-10 w-full h-full"
      />
    </section>
    <!-- </div>
    </div> -->
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
import type { PropType } from "vue";
import { storyblokServicesSection } from "../types/servicesSection";
import ServiceCard from "./ServiceCard.vue";
// import { ref, computed } from "vue";
const props = defineProps({
  blok: {
    type: Object as PropType<storyblokServicesSection>,
    default: null,
  },
});
</script>
./ServiceCard.vue
