<template>
  <div class="pt-20 pb-20 screenContainer overflow-hidden">
    <section class="grid grid-cols-12 gap-4 md:mx-12">
      <article
        class="lg:col-span-7 md:col-span-6 col-span-12"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <ContactCard v-for="card of blok.cards" :cardDetails="card" />
      </article>

      <article
        class="lg:col-span-5 md:col-span-6 col-span-12"
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        <ContactForm />
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue";
import { storyblokContactusSection } from "../types/contactusSection";
import ContactCard from "../components/ContactCard.vue";
// import { ref, computed } from "vue";
const props = defineProps({
  blok: {
    type: Object as PropType<storyblokContactusSection>,
    default: null,
  },
});
</script>
