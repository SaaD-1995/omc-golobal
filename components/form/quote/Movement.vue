<template>
  <section class="mb-10">
    <article class="h-full">
      <p class="text-lg sm:text-2xl text-black font-semibold mb-5">Movement Info</p>
      <div v-for="(address, eventIdx) in addressArray" :key="eventIdx" class="mb-10">
        <section class="flex gap-1 items-center min-w-[70px]">
          <p class="mb-1 font-semibold text-xs capitalize sm:text-sm text-label">
            {{ address.feedName }}
          </p>
          <TrashIcon
            @click="removeStop(eventIdx)"
            v-if="eventIdx != 0 && eventIdx != addressArray.length - 1"
            class="h-4 w-4 text-grayIcons mb-1.5 cursor-pointer"
          />
        </section>
        <InputquoteLocationCombo
          :quoteData="quoteData"
          :address="address"
          :index="eventIdx"
        />
      </div>

      <div class="flex items-center gap-10">
        <article @click="addStop()" class="flex items-center gap-2 cursor-pointer w-fit">
          <PlusCircleIcon class="h-5 w-5 text-primary2" />
          <p class="text-primary2 text-sm font-semibold">Add Stop</p>
        </article>
        <InputquoteSwitch :label="'Return'" v-model="quoteData.return" />
      </div>

      <FormQuoteReturnDetail v-if="quoteData.return" :quoteData="quoteData" />
    </article>

    <article class="">
      <Map :points="points" :zoom="10" />
    </article>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { PlusCircleIcon, TrashIcon, HomeIcon } from "@heroicons/vue/24/solid";
const props = defineProps({
  quoteData: { type: Object, default: null },
});

const addressArray = useCreateQuoteMovementFormData();

const id = ref(3);

function addStop() {
  addressArray.value.splice(addressArray.value.length - 1, 0, {
    feedName: "Stop",
    address: {
      date: null,
      time: null,
      departureDate: "",
      arrivalDate: "",
      id: id.value++,
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
    },
  });
}

function removeStop(index: any) {
  console.log("index", index);
  addressArray.value.splice(index, 1);
}

const points = computed(() => {
  console.log("points comp");
  type point = { lat: Number; lng: Number };
  let arr: point[] = [];
  addressArray.value.forEach((element: any) => {
    if (!!element.address.longitude && !!element.address.latitude)
      arr.push({
        lat: element.address.latitude,
        lng: element.address.longitude,
      });
  });
  if (!arr.length) return;
  return arr;
});
</script>
<style scoped></style>
