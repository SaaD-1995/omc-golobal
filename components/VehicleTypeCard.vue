<template>
  <div class="mt-0">
    <NuxtLink :to="cardDetails.cardLink.cached_url">
      <section data-aos="zoom-in-up" data-aos-duration="2000">
        <NuxtImg
          v-if="cardDetails.bgImage"
          format="webp"
          :src="cardDetails.bgImage.filename"
          class="overflow-hidden h-80 sm:h-56 md:h-64 lg:h-96 w-full xl:h-full bg-cover object-cover"
        />
        <div class="relative z-10 p-8 text-white pt-24 -mt-[12.8rem]">
          <StoryblokHeading v-for="heading of cardDetails.headings" :heading="heading" />
          <article class="flex">
            <NuxtImg
              class="w-8"
              v-if="cardDetails.icon"
              :src="cardDetails.icon.filename"
              :alt="cardDetails.icon.alt"
              format="webp"
            />
            <StoryblokHeading
              class="mt-2 ms-3"
              v-for="heading of cardDetails.subheadings"
              :heading="heading"
            />
          </article>
        </div>
      </section>
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">
import { PropType } from "vue";
import { VehicleTypeCard } from "../types/vehicleType";
const props = defineProps({
  cardDetails: { type: Object as PropType<VehicleTypeCard>, default: null },
});
</script>
