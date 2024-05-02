<script setup lang="ts">
import { ref, watch } from "vue";
import { MapPinIcon } from "@heroicons/vue/24/outline";
import { useRuntimeConfig } from "nuxt/app";
import { onClickOutside, useDebounceFn } from "@vueuse/core";
const config = useRuntimeConfig();
const emits = defineEmits(["emitAddressDataForModal"]);
const addressLoading = ref(false);
const props = defineProps({
  address: { type: Object, default: {} },
  placeholder: {
    type: String,
    default: "Postcode",
  },
});
const pauseWatch = ref(false);
const apiKey = config.public.MAP_API_KEY;

const selectedAddress: any = ref(null);
const addresses: any = ref([]);

const showAddresses = ref(false);
const inputboxRef = ref();

onClickOutside(inputboxRef, () => {
  showAddresses.value = false;
});

function EditAddressFunction() {
  emits("emitAddressDataForModal", props.address);
}

watch(
  () => props.address.inputVal,
  (newValue, oldValue) => {
    if (newValue == oldValue) return;
    if (!!!props.address?.inputVal) {
      for (const [key, value] of Object.entries(props.address)) {
        if (key != "date" && key != "time" && key != "validDate" && key != "validTime") {
          console.log("Watc");
          props.address[key] = "";
        }
      }
      props.address.validAddress = false;
      return;
    }
    if (!!!pauseWatch.value) debouncedFn();
  },
  { deep: true }
);

const debouncedFn = useDebounceFn(
  async () => {
    showAddresses.value = true;
    addressLoading.value = true;
    const findResult: any = await $fetch(
      `https://autocomplete.search.hereapi.com/v1/autocomplete?q=${props.address.inputVal}&limit=8&apiKey=${value.$config.MAP_API_KEY}`
    );
    addresses.value = findResult.items;
    addressLoading.value = false;
  },
  250,
  {
    maxWait: 3000,
  }
);

watch(
  () => selectedAddress.value,
  async () => {
    addressLoading.value = true;
    const findResult: any = await $fetch(
      `https://lookup.search.hereapi.com/v1/lookup?id=${selectedAddress.value}&apiKey=${apiKey}`
    );

    props.address.validAddress = true;
    console.log("find result", findResult);
    addressLoading.value = false;

    props.address.town = findResult?.address?.city ?? "";
    props.address.name =
      findResult?.address.label + " " + findResult?.address.countryName;
    // setting pausewatch to true for inputVa so that when i change input value it don't rewatch the inputVa
    pauseWatch.value = true;
    props.address.inputVal =
      findResult?.address.label + " " + findResult?.address.countryName;
    props.address.firstAddressLine = findResult?.address.label ?? "";
    props.address.secondAddressLine = findResult?.title ?? "";

    props.address.country = findResult?.address?.countryName ?? "";
    props.address.county = findResult?.address?.county ?? "";
    props.address.postcode = findResult?.address?.postalCode ?? "";
    props.address.latitude = findResult?.position.lat;
    props.address.longitude = findResult?.position.lng;
    // using settimeout so that it get stores in web api
    setTimeout(() => {
      pauseWatch.value = false;
    }, 0);
  },
  { deep: true }
);
</script>

<template>
  <div
    ref="inputboxRef"
    class="relative mt-2 border rounded-md shadow-sm group"
    :class="
      address.validAddress
        ? 'border-transparent'
        : 'border-[#ff6f60] shadow shadow-[#ff6f60]'
    "
  >
    <section class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <MapPinIcon class="w-5 h-5 text-grayIcons" />
    </section>
    <input
      autocomplete="off"
      @click="showAddresses = true"
      type="text"
      :placeholder="placeholder"
      class="block w-full h-10 pl-10 pr-10 border-0 rounded-md placeholder:text-sm placeholder:text-gray ring-1 ring-lightGrayColor focus:outline-none"
      v-model="address.inputVal"
    />
    <!-- <section class="absolute inset-y-0 right-0 flex items-center gap-3 pr-3">
      <MapIcon class="w-5 h-5 cursor-pointer text-primaryColor" />
    </section> -->
    <div
      class="absolute inset-y-0 top-0 right-0 flex items-center gap-3 pr-3"
      v-if="addressLoading"
    >
      <SvgLoadingRing class="w-5 h-5" />
    </div>

    <section
      v-if="addresses?.length && showAddresses"
      class="absolute z-10 visible w-full py-1 overflow-y-scroll bg-white shadow-md top-10 group-focus:invisible max-h-60"
    >
      <article v-for="(address, i) of addresses" :key="i">
        <li
          @click="
            (address.name = address.title),
              (showAddresses = false),
              (selectedAddress = address.id)
          "
          class="px-2 py-1 text-sm font-medium cursor-default hover:bg-primaryColor"
        >
          {{ address.title }}
        </li>
      </article>
    </section>
  </div>
</template>

<style scoped></style>
