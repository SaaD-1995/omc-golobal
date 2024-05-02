<template>
  <div class="lg:w-72 md:w-full w-full mt-6">
    <div class="flex">
      <NuxtImg class="w-8 h-8" :src="cardDetails.icon.filename" />
      <StoryblokHeading
        class="ms-2 mt-0.5"
        v-for="heading of cardDetails.iconHeadings"
        :heading="heading"
        format="webp"
      />
    </div>
    <StoryblokHeading
      class="mt-2 heading"
      v-for="heading of cardDetails.headings"
      :heading="heading"
    />
  </div>
</template>
<script setup lang="ts">
import { PropType } from "vue";
import { ContactCard } from "../types/contactusSection";
const props = defineProps({
  cardDetails: { type: Object as PropType<ContactCard>, default: null },
});
</script>
