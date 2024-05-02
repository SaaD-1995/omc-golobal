<script setup lang="ts">
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { ref, computed, watch } from "vue";
import {
  HomeIcon,
  FlagIcon,
  PlusCircleIcon,
  ClockIcon,
  TrashIcon,
} from "@heroicons/vue/24/solid";
import { useCreateQuoteMovementFormDataReturn } from "~/composables/quotes";

const emits = defineEmits(["emitAddressDataForModal"]);
const props = defineProps(["quoteData"]);

console.log("quoteData in FormQuoteReturnDetail:", props.quoteData);

const returnMovementData = useCreateQuoteMovementFormDataReturn();

let emptyAddressObject = {
  date: null,
  time: null,
  departureDate: "",
  arrivalDate: "",
  id: 1,
  country: null,
  latitude: "",
  longitude: "",
  county: null,
  town: null,
  firstAddressLine: "",
  secondAddressLine: "",
  postcode: null,
  name: "",
  inputVal: "",
};

const addressArray = useCreateQuoteMovementFormData();

function emitData(address: any) {
  emits("emitAddressDataForModal", address);
}

function addStop() {
  returnMovementData.value.splice(returnMovementData.value.length - 1, 0, {
    date: null,
    time: null,
    departureDate: "",
    arrivalDate: "",
    id: 3,
    country: null,
    latitude: "",
    longitude: "",
    county: null,
    town: null,
    firstAddressLine: "",
    secondAddressLine: "",
    postcode: null,
    name: "",
    inputVal: "",
    validAddress: true,
    validDate: null,
    validTime: null,
  });
}

watch(
  () => addressArray.value,
  (newValue, oldValue) => {
    if (!!props.quoteData.return) {
      console.log("return is true and watching array");
      if (!!!props.quoteData.differentDestination) {
        console.log("inside if");
        Object.assign(returnMovementData.value[1], addressArray.value[0].address);
      }
      if (!!!props.quoteData.differentPickup) {
        console.log("inside second if");
        Object.assign(
          returnMovementData.value[0],
          addressArray.value[addressArray.value.length - 1].address
        );
      }
    }
  },
  { deep: true }
);

const minDate = computed(() => {
  const today = new Date();
  return today;
});

function removeStop(index: number) {
  console.log(index);
  returnMovementData.value.splice(index, 1);
}

watch(
  () => props.quoteData.differentDestination,
  (newValue, oldValue) => {
    console.log("watch desti");

    if (newValue) {
      Object.assign(returnMovementData.value[returnMovementData.value.length - 1], {
        ...emptyAddressObject,
      });
    } else {
      Object.assign(
        returnMovementData.value[returnMovementData.value.length - 1],
        addressArray.value[0].address
      );
    }
  }
);

watch(
  () => props.quoteData.differentPickup,
  (newValue, oldValue) => {
    console.log("watch pick");
    if (newValue) {
      Object.assign(returnMovementData.value[0], { ...emptyAddressObject });
    } else {
      Object.assign(
        returnMovementData.value[0],
        addressArray.value[addressArray.value.length - 1].address
      );
    }
  }
);
// watch for validating date and time
watch(
  () => props.quoteData.return_date,
  (newValue, oldValue) => {
    if (!!newValue) props.quoteData.validReturnDate = null;
    else props.quoteData.validReturnDate = false;
  }
);
watch(
  () => props.quoteData.return_time,
  (newValue, oldValue) => {
    if (!!newValue) props.quoteData.validReturnTime = null;
    else props.quoteData.validReturnTime = false;
  }
);
</script>
<template>
  <div>
    <section class="grid justify-between grid-cols-2 mt-10 gap-x-3">
      <article class="min-w-full">
        <vue-date-picker
          placeholder="Return Date"
          utc
          :enable-time-picker="false"
          auto-apply
          :min-date="minDate"
          v-model="quoteData.return_date"
          :state="quoteData.validReturnDate"
        ></vue-date-picker>
      </article>
      <article class="min-w-full">
        <vue-date-picker
          placeholder="Return Time"
          utc
          time-picker
          :state="quoteData.validReturnTime"
          v-model="quoteData.return_time"
        >
          <template #input-icon>
            <ClockIcon class="w-5 h-5 ml-3" />
          </template>
        </vue-date-picker>
      </article>
    </section>

    <section class="flex flex-wrap gap-5 my-9">
      <article class="flex justify-between gap-5">
        <InputquoteSwitch :label="'Vehicle To Stay'" v-model="quoteData.isVehicleStay" />
      </article>
      <article class="flex justify-between gap-5">
        <InputquoteSwitch
          :label="'Different Collection address'"
          v-model="quoteData.differentPickup"
        />
      </article>
      <article class="flex justify-between gap-5">
        <InputquoteSwitch
          :label="'Different destination'"
          v-model="quoteData.differentDestination"
        />
      </article>
    </section>
    <section>
      <!-- {{ returnMovementData }} -->
      <article
        class="flex flex-col w-full mt-6 mb-5 bg-white rounded-md md:gap-x-6 gap-y-1"
        v-if="quoteData.differentPickup"
      >
        <p class="mb-1 text-xs font-semibold capitalize sm:text-sm text-label">
          Collection Postcode
        </p>
        <div class="w-full">
          <InputquoteAddress
            @emitAddressDataForModal="emitData($event)"
            :address="returnMovementData[0]"
          />
        </div>
      </article>

      <article
        v-for="(stop, i) in returnMovementData"
        :key="stop.id"
        class="flex flex-col w-full mt-6 mb-5 bg-white rounded-md md:gap-x-6 gap-y-1"
      >
        <div v-if="i != 0 && i != returnMovementData.length - 1">
          <div class="flex items-center gap-2">
            <p class="mb-1 text-xs font-semibold capitalize sm:text-sm text-label">
              Stop {{ i }}
            </p>
            <TrashIcon
              @click="removeStop(i)"
              class="h-4 w-4 text-grayIcons mb-1.5 cursor-pointer"
            />
          </div>
          <div class="w-full">
            <!-- Assuming you have an InputAddress component for stops -->
            <InputquoteAddress
              @emitAddressDataForModal="emitData($event)"
              :address="stop"
            />
          </div>
        </div>
      </article>

      <article
        class="flex flex-col w-full mt-6 mb-5 bg-white rounded-md md:gap-x-6 gap-y-1"
        v-if="quoteData.differentDestination"
      >
        <p class="mb-1 text-xs font-semibold capitalize sm:text-sm text-label">
          Destination Postcode
        </p>
        <div class="w-full">
          <InputAddress
            @emitAddressDataForModal="emitData($event)"
            :address="returnMovementData[returnMovementData.length - 1]"
          />
        </div>
      </article>

      <article
        v-if="quoteData.return"
        @click="addStop()"
        class="flex items-center gap-2 cursor-pointer w-fit"
      >
        <PlusCircleIcon class="w-5 h-5 text-primary2" />
        <p class="text-sm font-semibold text-primary2">Stop At Return</p>
      </article>
    </section>
  </div>
</template>
<style scoped></style>
~/composable/quotes