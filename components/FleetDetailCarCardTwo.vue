<template>
  <div
    class="bg-white rounded-lg py-5 px-3 h-full"
    data-aos="flip-right"
    data-aos-duration="2000"
  >
    <section class="flex justify-center">
      <NuxtImg
        v-if="cardDetails.cardimage"
        :src="cardDetails.cardimage.filename"
        class="w-16"
      />
    </section>
    <StoryblokHeading
      class="sm:mb-2 mt-4 heading"
      v-for="heading of cardDetails.headings"
      :heading="heading"
      format="webp"
    />
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { FleetDetailCarCard } from "../types/carFacilities";
const props = defineProps({
  cardDetails: { type: Object as PropType<FleetDetailCarCard>, default: null },
});
</script>
