<script setup>
const { slug } = useRoute().params;
import { useRouter } from "vue-router";
const router = useRouter();
const url = slug && slug.length > 0 ? slug.join("/") : "home";
const isPreview = useRuntimeConfig().public.NODE_ENV !== "production";
const resolveRelations = [
  "featuredServices.services",
  "allServices.services",
  "servicesSection.services",
  "allServices.services",
  "vehicleType.fleetCards",
  "allFleets.fleetCards",
  "aboutTrasnport.aboutCards",
  // "fleetDetail.fleetCardDetailSilders",
  // "carFacilities.fleetDetailCars",
  // "carFacilities.fleetDetailsCarTwos",
  "allFleet.fleet",
  "allService.service",
];
const show = ref(true);

let story, pending;

// This is immedietely invoked function expression
(async function iife() {
  let data = await useAsyncData(
    // `${locale.value}-${url}`,
    async () => {
      const { data } = await useStoryblokApi().get(
        `cdn/stories/${url.replace(/\/$/, "")}`,
        {
          version: isPreview ? "draft" : "published",
          // language: locale.value,
          resolve_relations: resolveRelations,
        }
      );
      return data?.story;
    }
  );
  story = data.data;
  pending = data.pending;
  if (!isPreview && story) {
    if (!story.value) {
      ({ statusCode: 404, statusMessage: "Page Not Found" });
    }
  }
  show.value = false;
})();

onMounted(async () => {
  if (isPreview && story && story.value && story.value.id) {
    alert("preivew mode");
    useStoryblokBridge(story.value.id, (evStory) => (story.value = evStory), {
      resolveRelations,
    });
  }
});
async () => {
  try {
    const response = await fetch("../plugin/useStoryblokApi");
    const data = await response.json();
  } catch (error) {
    console.error("Error fetching data from Storyblok:", error);
    // Redirect to the custom error page or display an error message to the user
    // router.push("/error"); // Example redirection to a custom error page
  }
};

const seoTitle = computed(() => {
  return story?.content?.title ? story.content.title : "error";
});
useSeoMeta({
  title: seoTitle.value ? seoTitle.value : "error",
});
</script>

<template>
  <SplashScreen v-if="show" />

  <StoryblokComponent v-if="pending === false && story" :blok="story.content" />
</template>
