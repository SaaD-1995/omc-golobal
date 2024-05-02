<template>
  <div class="bg-bgAbout mt-10 overflow-hidden">
    <div class="screenContainer pt-10 pb-20">
      <section
        class="grid items-start gap-5 mt-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3"
      >
        <!-- <pre class="text-red-500">{{ blok }}</pre> -->
        <FleetDetailCarCard
          v-for="card of blok.fleetDetailCars"
          :cardDetails="card"
          :key="card.uuid"
        />
      </section>
      <section
        class="grid items-start gap-5 mt-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4"
      >
        <FleetDetailCarCardTwo
          v-for="card of blok.fleetDetailsCarTwos"
          :cardDetails="card"
          :key="card.uuid"
        />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineProps } from "vue";
import type { PropType } from "vue";
import { storyblokCarFacilities } from "../types/carFacilities";
import FleetDetailCarCard from "../components/FleetDetailCarCard.vue";
// import FleetDetailCarCardTwo from "../components/FleetDetailCarCardTwo.vue";

// import { ref, computed } from "vue";
const props = defineProps({
  blok: {
    type: Object as PropType<storyblokCarFacilities>,
    default: null,
  },
});
</script>
