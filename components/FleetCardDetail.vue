<template>
  <div class="">
    <NuxtImg
      class="md:w-[40rem] w-full h-96 ms-10 sm:ms-0 md:mx-[40rem]"
      :src="cardDetails.vehicleImage.filename"
      :alt="cardDetails.vehicleImage.alt"
      format="webp"
    />
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { FleetCardDetail } from "../types/fleetDetail";
const props = defineProps({
  cardDetails: { type: Object as PropType<FleetCardDetail>, default: null },
});
</script>
