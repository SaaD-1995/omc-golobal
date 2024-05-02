<template>
  <div class="relative overflow-hidden">
    <!-- v-if="$route.path === '/'" -->
    <NuxtImg
      v-if="isTargetRoute"
      :src="blok.bgImage.filename"
      format="webp"
      class="w-full min-h-full sm:h-full xl:h-full object-cover absolute bg-cover -z-20 brightness-75"
    />
    <NuxtImg
      v-else-if="$route.path === '/contact' || $route.path === '/get-a-quote'"
      :src="blok.bgImage.filename"
      format="webp"
      class="w-full h-ful sm:h-full xl:h-full object-cover absolute bg-cover -z-20 brightness-75"
    />
    <NuxtImg
      v-else
      :src="blok.bgImage.filename"
      format="webp"
      class="w-full min-h-full sm:h-full xl:h-full object-cover absolute -z-20 bg-cover brightness-75"
    />
    <div class="screenContainer">
      <div
        class="relative pt-36 sm:pt-40 md:pt-48 lg:pt-72 sm:pb-24 pb-20 md:pb-5 2xl:pt-96 2xl:pb-40"
        v-if="$route.path === '/' || $route.path === '/home'"
      >
        <section class="grid grid-cols-12 gap-4 xl:gap-3">
          <article
            class="lg:col-span-6 md:col-span-12 col-span-12"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <StoryblokHeading
              v-for="heading of blok.headings"
              class="md:mb-4"
              :heading="heading"
            />
            <div class="flex gap-2 lg:gap-3">
              <StoryblokHeading
                v-for="heading of blok.flexHeadings"
                class="mb-5 md:mt-0 sm:mt-5 mt-1"
                :heading="heading"
              />
              <StoryblokHeading
                v-for="heading of blok.colorHeadings"
                class="mb-5 md:mt-0 sm:mt-5 mt-1"
                :heading="heading"
              />
            </div>
            <NuxtImg
              :src="blok.icon.filename"
              format="webp"
              class="2xl:w-auto xl:w-[50%] lg:w-[50%] md:w-44 sm:w-56 w-32 -mt-5 xl:ms-[11rem] lg:ms-[9rem] md:ms-28 sm:ms-[9rem] ms-20"
              style="max-width: calc(100% - (60px + 1em))"
            />
            <StoryblokHeading
              v-for="heading of blok.bottomHeadings"
              class="md:mb-5 md:mt-2 sm:mt-2 mt-0"
              :heading="heading"
            />
            <StoryblokHeading
              v-for="heading of blok.bodyHeadings"
              class="mt-5 sm:pe-52 md:pe-72 lg:pe-20"
              :heading="heading"
            />
            <div class="flex justify-start mt-5">
              <StoryblokBtn
                v-for="button of blok.buttons"
                class="py-3 px-5"
                :button="button"
              />
            </div>
          </article>
          <article
            data-aos="fade-left"
            data-aos-duration="2000"
            class="lg:col-span-6 md:col-span-12 col-span-12 flex justify-center md:justify-end mt-12 sm:mt-10 lg:mt-0 md:mt-32"
          >
            <HerosectionFormSteper />
          </article>
        </section>
      </div>

      <!-- other page -->
      <div
        class="relative pt-36 sm:pt-40 md:pt-48 lg:pt-72 sm:pb-24 pb-20 md:pb-5 2xl:pt-96 2xl:pb-40"
        v-else-if="isOtherRouter"
      >
        <section class="grid grid-cols-12 gap-4">
          <article
            class="lg:col-span-6 md:col-span-5 col-span-12 lg:mt-0 md:mt-20"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <div class="pe-2">
              <StoryblokHeading
                class="mb-5 pe-0"
                v-for="heading of blok.headings"
                :heading="heading"
              />
              <StoryblokHeading
                class="mb-5 sm:pe-44 md:pe-0 lg:pe-0"
                v-for="heading of blok.bodyHeadings"
                :heading="heading"
              />
              <div class="flex justify-start mt-10">
                <StoryblokBtn
                  v-for="button of blok.buttons"
                  @click="toggleModal()"
                  class="py-3 px-5"
                  :button="button"
                />
              </div>
            </div>
          </article>
          <article
            data-aos="fade-left"
            data-aos-duration="2000"
            class="lg:col-span-6 md:col-span-7 col-span-12 flex justify-center md:justify-end mt-12 sm:mt-10 lg:mt-0 md:mt-20"
          >
            <HerosectionFormSteper />
          </article>
        </section>
      </div>

      <!-- contact us and get a quote page -->
      <div
        class="relative pt-32 pb-40 sm:pt-40 md-56 lg:pt-56 lg:pb-20 md:pb-20 sm:pb-24 pb-20 2xl:pt-72 2xl:pb-40 flex align-middle justify-center"
        v-else-if="$route.path === '/contact' || $route.path === '/get-a-quote'"
      >
        <section data-aos="fade-down" data-aos-duration="2000">
          <div class="pe-2">
            <StoryblokHeading
              class="mb-5 px-0 sm:px-20 md:px-40 lg:px-52 xl:px-[15rem]"
              v-for="heading of blok.headings"
              :heading="heading"
            />
          </div>
          <div class="flex justify-center mt-5">
            <StoryblokBtn
              v-for="button of blok.buttons"
              class="py-3 px-5"
              :button="button"
              @click="toggleModal()"
            />
          </div>
        </section>
      </div>

      <!-- Than You Screen -->
      <div class="relative pt-40 sm:pt-40 md:pt-64 mb-20 md:mb-40" v-else>
        <div class="flex align-middle justify-center">
          <section class="pe-2" data-aos="fade-down" data-aos-duration="2000">
            <StoryblokHeading
              class="mb-5 px-10 sm:px-52 md:px-56 lg:px-52 xl:px-[18rem]"
              v-for="heading of blok.headings"
              :heading="heading"
            />
            <StoryblokHeading
              class="mb-5 md:px-0 sm:px-44"
              v-for="heading of blok.bodyHeadings"
              :heading="heading"
            />

            <div class="flex justify-center mt-5">
              <StoryblokBtn
                v-for="button of blok.buttons"
                class="py-3 px-5"
                :button="button"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>

  <!-- pop-up -->
  <div
    class="fixed z-50 overflow-y-auto top-20 px-5 md:px-8 lg:px-40 bottom-0 w-full h-full left-0 hidden backdrop-blur transition-all duration-300"
    id="modal"
  >
    <div
      class="bg-white max-w-full h-[85vh] pt-4 px-4 pb-4 text-center sm:block rounded-xl"
    >
      <div class="bg-gray-200 px-4 py-3 text-right">
        <button type="button" class="py-2 px-4" @click="toggleModal()">
          <XMarkIcon class="w-8 h-8 text-black" />
        </button>
      </div>
      <iframe
        class="w-full h-[85%] rounded-xl"
        src="https://www.youtube-nocookie.com/embed/0wsB8XdYsaw?si=MTfS68TzMhg5rhiQ&amp;controls=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed, PropType, ref } from "vue";
import { storyblokHeroSection } from "../types/heroSection";
import { useRoute } from "vue-router";
import { XMarkIcon } from "@heroicons/vue/24/outline";
const props = defineProps({
  blok: {
    type: Object as PropType<storyblokHeroSection>,
    default: null,
  },
});
const route = useRoute();
const modal = ref(false);
const isTargetRoute = computed(() => {
  const targetPaths = [
    "/",
    "/about",
    "/service",
    "/fleet",
    "/fleet-detail",
    "/services-detail",
  ];
  return targetPaths.includes(route.path);
});
const isOtherRouter = computed(() => {
  const targetPaths = [
    "/about",
    "/service",
    "/fleet",
    "/fleet-detail",
    "/services-detail",
    "/fleet/mercedes-vito",
    "/fleet/wc-mercedes-sprinter",
    "/fleet/mercedes-sprinters",
    "/fleet/mercedes-sprinter",
    "/fleet/iveco-daily",
    "/fleet/mercedes-vito5",
    "/fleet/jet-class",
    "/fleet/mercedes-sprinter-1",
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
  ];
  return targetPaths.includes(route.path);
});
const toggleModal = () => {
  document.getElementById("modal").classList.toggle("hidden");
};
</script>

<style scoped>
.text-gradient {
  background-image: linear-gradient(to right, #bdc200, #95c11f, #3aaa35);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>
