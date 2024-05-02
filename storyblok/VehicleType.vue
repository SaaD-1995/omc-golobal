<template>
  <div class="bg-white overflow-hidden">
    <!-- <div class="screenContainer flex items-center">
      <StoryblokHeading
        class="me-3 text-center"
        v-for="heading of blok.headings"
        :heading="heading"
      />
      <ul
        class="flex flex-wrap text-sm font-medium justify-center md:justify-start text-center text-gray-500 dark:text-gray-400"
      >
        <li class="me-3">
          <button
            :class="{ 'bg-black text-white': activeTab === 'tab1' }"
            @click="activeTab = 'tab1'"
            class="inline-block px-4 py-3 rounded-lg bg-gray-100"
          >
            Car
          </button>
        </li>
        <li class="me-3">
          <button
            :class="{ 'bg-black text-white': activeTab === 'tab2' }"
            @click="activeTab = 'tab2'"
            class="inline-block px-4 py-3 rounded-lg bg-gray-100"
          >
            Minibus
          </button>
        </li>
        <li class="me-2">
          <button
            :class="{ 'bg-black text-white': activeTab === 'tab3' }"
            @click="activeTab = 'tab3'"
            class="inline-block px-4 py-3 rounded-lg bg-gray-100"
          >
            Coach
          </button>
        </li>
      </ul>
    </div> -->
    <!-- <pre class="text-black">{{ blok }}</pre> -->
    <section
      class="grid items-start gap-0 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2"
    >
      <VehicleTypeCard v-for="card of blok.VehicleCards" :cardDetails="card" />
    </section>
  </div>
</template>
<script setup lang="ts">
import { defineProps, ref } from "vue";
import type { PropType } from "vue";
const activeTab = ref("tab1");
import { storyblokVehicleType } from "../types/vehicleType";
// import { ref, computed } from "vue";
const props = defineProps({
  blok: {
    type: Object as PropType<storyblokVehicleType>,
    default: null,
  },
});
</script>
