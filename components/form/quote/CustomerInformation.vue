<script setup lang="ts">
import { ref, onMounted } from "vue";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/vue/24/solid";
const props = defineProps({
  quoteData: {
    type: Object,
    default: null,
  },
});
const companies: any = useCompanies();
const companyOptions = ref([]);

onMounted(async () => {
  if (Array.isArray(companies.value)) {
    companyOptions.value = companies.value.map((company: any) => ({
      value: company.name,
      label: company.name,
    }));
  }
});
</script>

<template>
  <section>
    <p class="text-lg sm:text-2xl text-black font-semibold mb-5">Customer Information</p>

    <article class="mt-5 bg-white mb-10">
      <Input
        :label="'Name'"
        :type="'text'"
        class="mb-5"
        :displayError="false"
        v-model="quoteData.customerInformation.clientName"
      />
      <Input
        :label="'Email'"
        :type="'email'"
        :icon="EnvelopeIcon"
        v-model="quoteData.customerInformation.email"
      />

      <Input
        :label="'Phone Number'"
        :type="'number'"
        class="mb-5"
        :displayError="false"
        :icon="PhoneIcon"
        v-model="quoteData.customerInformation.phoneNumber"
      />
      <Input
        :label="'Company Name (Optional)'"
        :type="'text'"
        :required="false"
        class="mb-5"
        :displayError="false"
        v-model="quoteData.customerInformation.companyName"
      />
      <!-- <InputSelect
        v-model="quoteData.customerInformation.companyName"
        :data="companyOptions"
        :label="'Company Name'"
      /> -->
    </article>
  </section>
</template>
