<template>
  <div>
    <section
      class="w-full h-full md:h-[470px] bg-white rounded-lg p-5 box-shadow"
      data-aos="flip-right"
      data-aos-duration="2000"
    >
      <article
        class="bg-[#F4F4F4] text-[#234822] rounded-lg w-[120px] h-[120px] flex items-center justify-center"
      >
        <StoryblokHeading
          class="sm:mb-2 mt-4 heading"
          v-for="heading of cardDetails.content.headings"
          :heading="heading"
        />
      </article>
      <article>
        <StoryblokHeading
          class="sm:mb-2 mt-4 heading"
          v-for="heading of cardDetails.content.subHeadings"
          :heading="heading"
        />
      </article>
    </section>
  </div>
</template>
<script setup lang="ts">
import { PropType } from "vue";
import { transportCard } from "../types/aboutTrasnport";
const props = defineProps({
  cardDetails: { type: Object as PropType<transportCard>, default: null },
});
</script>
