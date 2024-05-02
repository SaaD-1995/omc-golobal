<template>
  <div>
    <BarNav />
    <section v-if="showSlug" class="mt-0 md:mt-0">
      <slot />
    </section>
    <section v-else class="mt-0 md:mt-0">
      <Error />
    </section>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, watch, onMounted, computed } from "vue";
import Error from "../components/Error.vue";
const slug = useRoute();
const showSlug = ref(true);
const pageTitle = ref("");
computed(() => {
  showSlug.value = checkSlug(slug.path);
});
onMounted(() => {
  showSlug.value = checkSlug(slug.path);
});
// onMounted(() => {
//   const result = checkSlug(slug.path);
//   console.log("Result of checkSlug:", result);
//   showSlug.value = result;
// });
watch(
  () => slug.path,
  (newPath) => {
    showSlug.value = checkSlug(slug.path);
  }
);

function checkSlug(path: string): boolean {
  const allowedPaths = [
    "/",
    "/about",
    "/service",
    "/fleet",
    "/contact",
    "/services-detail",
    "/fleet-detail",
    "/get-a-quote",
    "/thank-you",
    "/fleet/jet-class",
    "/fleet/mercedes-vito",
    "/fleet/wc-mercedes-sprinter",
    "/fleet/mercedes-sprinters",
    "/fleet/mercedes-sprinter",
    "/fleet/mercedes-sprinter-1",
    "/fleet/iveco-daily",
    "/fleet/isuszu-grand-toro",
    "/fleet/neoplan-tourliner",
    "/service/theme-park",
    "/service/elevate-your-corporate-journey",
    "/service/safe-journeys-bright-futures",
    "/service/religious-groups",
    "/service/european-uk-tours",
    "/service/school-uni-transport",
    "/service/airport-transfers",
    "/service/sports-events",
    "/service/wedding-elegance-unmatched-bliss",
    "/fleet/get-a-quote",
    "/home",
    "/request-a-callback",
  ];
  return allowedPaths.includes(path);
}
</script>
<style scoped></style>
