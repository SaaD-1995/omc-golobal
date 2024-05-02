<template>
  <div>
    <InputquoteAddress
      @emitAddressDataForModal="emitData($event)"
      :address="address.address"
    />
    <section
      v-if="address.feedName != 'Stop'"
      class="grid justify-between grid-cols-2 gap-x-3"
    >
      <article class="min-w-full mt-3">
        <vue-date-picker
          placeholder="Select Date"
          auto-apply
          utc
          :enable-time-picker="false"
          :min-date="minDate"
          v-model="address.address.date"
          :state="address.address.validDate"
        ></vue-date-picker>
      </article>
      <article class="min-w-full mt-3">
        <vue-date-picker
          placeholder="Select Time"
          utc
          time-picker
          v-model="address.address.time"
          :state="address.address.validTime"
        >
          <template #input-icon>
            <ClockIcon class="w-5 h-5 ml-3" />
          </template>
        </vue-date-picker>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ClockIcon } from "@heroicons/vue/24/outline";
import { ref, computed, watch } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
const props = defineProps({
  address: { type: Object, default: null },
  quoteData: { type: Object, default: null },
  index: { type: Number, default: -1 },
});

const emits = defineEmits(["emitAddressDataForModal"]);
const addressArray: any = useCreateQuoteMovementFormData();

const minDate = computed(() => {
  const today = new Date();
  return today;
});

function emitData(address: any) {
  emits("emitAddressDataForModal", address);
}

const duration: any = useDuration();
const pauseWatch = ref(false);

function setTimePickupToDestination(value: any) {
  console.log("setTimePickupToDestination", duration.value);
  const originalDate = new Date(value.address.date);
  console.log("original date", value.address.date);
  console.log("original date", originalDate);
  originalDate.setHours(value.address.time.hours);
  originalDate.setMinutes(value.address.time.minutes);
  originalDate.setSeconds(value.address.time.seconds);
  originalDate.setSeconds(originalDate.getSeconds() + duration.value);
  addressArray.value[
    addressArray.value.length - 1
  ].address.date = originalDate.toISOString();

  const hours = originalDate.getHours();
  const minutes = originalDate.getMinutes();
  const seconds = originalDate.getSeconds();
  console.log("hours", hours, "minutes", minutes, "seconds", seconds);
  addressArray.value[addressArray.value.length - 1].address.time = {
    hours,
    minutes,
    seconds,
  };
}

function mixture(value: any, pickupToDestination: Boolean = true) {
  const originalDate = new Date(value.address.date);
  originalDate.setHours(value.address.time.hours);
  originalDate.setMinutes(value.address.time.minutes);
  originalDate.setSeconds(value.address.time.seconds);
  if (!!pickupToDestination) {
    originalDate.setSeconds(originalDate.getSeconds() + duration.value);
    addressArray.value[
      addressArray.value.length - 1
    ].address.date = originalDate.toISOString();
  } else {
    originalDate.setSeconds(originalDate.getSeconds() - duration.value);
    addressArray.value[0].address.date = originalDate.toISOString();
  }

  const hours = originalDate.getHours();
  const minutes = originalDate.getMinutes();
  const seconds = originalDate.getSeconds();
  if (pickupToDestination)
    addressArray.value[addressArray.value.length - 1].address.time = {
      hours,
      minutes,
      seconds,
    };
  else
    addressArray.value[0].address.time = {
      hours,
      minutes,
      seconds,
    };
}

function setTimeDestinationToPickup(value: any) {
  console.log("setTimeDestinationToPickup", duration.value);
  const originalDate = new Date(value.address.date);
  console.log("original date", value.address.date);
  console.log("original date", originalDate);
  originalDate.setHours(value.address.time.hours);
  originalDate.setMinutes(value.address.time.minutes);
  originalDate.setSeconds(value.address.time.seconds);
  originalDate.setSeconds(originalDate.getSeconds() - duration.value);
  addressArray.value[0].address.date = originalDate.toISOString();

  const hours = originalDate.getHours();
  const minutes = originalDate.getMinutes();
  const seconds = originalDate.getSeconds();
  console.log("hours", hours, "minutes", minutes, "seconds", seconds);
  addressArray.value[0].address.time = {
    hours,
    minutes,
    seconds,
  };
}

// main function to call a function on the basis of which field is changed
function handleTimeChange(value: any) {
  pauseWatch.value = true;
  setTimeout(() => {
    pauseWatch.value = false;
  }, 0);
  if (value.feedName == "Collection Postcode") {
    console.log("handle pick", value);
    if (
      !!value.address.date &&
      !!value.address.time &&
      !!value.address.firstAddressLine &&
      !!addressArray.value[addressArray.value.length - 1].address.firstAddressLine
    ) {
      setTimePickupToDestination(value);
    }
  } else if (value.feedName == "Destination Postcode") {
    console.log("handle desti", value);
    if (
      !!value.address.date &&
      !!value.address.time &&
      !!value.address.firstAddressLine &&
      !!addressArray.value[0].address.firstAddressLine
    ) {
      setTimeDestinationToPickup(value);
    }
  }
}

watch(
  () => [props.address.address.date, props.address.address.time],
  (newValue, oldValue) => {
    if (!!!pauseWatch.value) handleTimeChange(props.address);
  },
  { deep: true }
);

// watching both date and time to handle time change
watch(
  () => props.address.address.firstAddressLine,
  () => {
    handleTimeChange(props.address);
  },
  { deep: true }
);

// watching duration receiving from map to handle time change
watch(
  () => duration.value,
  () => {
    const firstAddress = addressArray.value[0].address;
    const lastAddress = addressArray.value[addressArray.value.length - 1].address;

    if (
      !!firstAddress.firstAddressLine &&
      !!firstAddress.date &&
      !!firstAddress.time &&
      !!lastAddress.firstAddressLine
    ) {
      console.log("in hehehe");
      setTimePickupToDestination(addressArray.value[0]);
    }
    if (
      !!firstAddress.firstAddressLine &&
      !!lastAddress.firstAddressLine &&
      !!lastAddress.date &&
      !!lastAddress.time
    ) {
      console.log("in hehehe");
      setTimeDestinationToPickup(addressArray.value[addressArray.value.length - 1]);
    }
  },
  { deep: true }
);

// this watch is only for validating date and showing error border
watch(
  () => props.address.address.date,
  (newValue, oldValue) => {
    if (!!newValue) props.address.address.validDate = null;
    else props.address.address.validDate = false;
  }
);
// this watch is only for validating time and showing error border
watch(
  () => props.address.address.time,
  (newValue, oldValue) => {
    if (!!newValue) props.address.address.validTime = null;
    else props.address.address.validTime = false;
  }
);
</script>
<style></style>
