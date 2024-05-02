<script setup lang="ts">
import { ref } from "vue";
import { PlusCircleIcon } from "@heroicons/vue/24/outline";
const props = defineProps({
  quoteData: {
    type: Object,
    default: null,
  },
});

const journeyType = [
  { value: "one_way", label: "One Way" },
  { value: "round_trip", label: "Round Trip" },
  { value: "multi_city", label: "Multi-City" },
];

const vehicleClass = [
  { value: "economy", label: "Economy" },
  // { value: "standard", label: "Standard" },
  { value: "Premium Economy", label: "Premium Economy" },
  { value: "Business", label: "Business" },
];

const luggage = [
  { value: "No Luggage", label: "No Luggage" },
  { value: "Hand Luggage", label: "Hand Luggage" },
  { value: "Other", label: "Other (please specify in notes)" },
];

const addNote = ref(false);
const features = ref();
</script>
<template>
  <div class="">
    <!-- {{ form }} -->
    <p class="text-lg sm:text-2xl text-black font-semibold mb-5">Journey Information</p>
    <!-- {{ quoteData }}  -->

    <section class="mt-5 bg-white mb-10">
      <article class="grid grid-cols-1 gap-5">
        <!-- <InputSelect
          v-model="quoteData.journeyType"
          :data="journeyType"
          :label="'Vehicle Type'"
        /> -->
        <Input
          v-model="quoteData.journeyInformation.passengers"
          :label="'Passengers'"
          :type="'number'"
          :displayError="false"
        />
      </article>
      <article class="grid sm:grid-cols-2 gap-5 mt-6">
        <InputquoteSelect
          v-model="quoteData.journeyInformation.vehicleClassTypeId"
          :data="vehicleClass"
          :label="'Vehicle Class'"
        />
        <InputquoteSelect
          v-model="quoteData.journeyInformation.vehicleLuggageTypeId"
          :data="luggage"
          :label="'Luggage'"
        />
      </article>

      <!-- <article class="mt-6">
        <InputquoteQuoteVehicleFeatureList
          v-model="quoteData.journeyInformation.features"
          @features="features = $event"
        />
      </article> -->
      <hr class="my-6 md:mt-10 mb-7" v-if="addNote" />

      <article>
        <div
          @click="addNote = !addNote"
          v-if="!addNote"
          class="flex items-center gap-3 mt-7 cursor-pointer w-fit"
        >
          <PlusCircleIcon class="h-5 w-5 text-primaryColor" />
          <p class="text-primaryColor">Add Notes</p>
        </div>

        <div v-else class="">
          <InputquoteTextArea
            :label="'Notes'"
            :min="0"
            :required="false"
            :max="600"
            v-model="quoteData.journeyInformation.notes"
            class="bg-white"
            :rows="5"
            :placeholder="'Add some notes here.....'"
          />
        </div>
      </article>
    </section>
  </div>
</template>

<style scoped></style>
