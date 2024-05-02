<template>
  <div
    class="bg-white rounded-lg py-14 px-10 h-full"
    data-aos="flip-left"
    data-aos-duration="2000"
  >
    <section>
      <article class="flex justify-center">
        <NuxtImg
          v-if="cardDetails.cardimage"
          :src="cardDetails.cardimage.filename"
          class="w-16"
          format="webp"
        />
      </article>

      <StoryblokHeading
        class="sm:mb-0 mt-3 heading"
        v-for="heading of cardDetails.headings"
        :heading="heading"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { FleetDetailCarCard } from "../types/carFacilities";
const props = defineProps({
  cardDetails: { type: Object as PropType<FleetDetailCarCard>, default: null },
});
</script>
