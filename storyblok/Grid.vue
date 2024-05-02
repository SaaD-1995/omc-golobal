<template>
  <div class="bg-white pt-20 pb-20 md:pt-32 2xl:pt-40 overflow-hidden">
    <div class="screenContainer mx-auto px-4">
      <section
        class="grid grid-cols-12 gap-2"
        v-if="$route.path === '/' || $route.path === '/home'"
      >
        <article
          class="col-span-12 sm:col-span-7 md:col-span-7 lg:col-span-7"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <StoryblokHeading
            class="mb-5"
            v-for="heading of blok.headings"
            :heading="heading"
          />
          <div>
            <StoryblokHeading
              class="lg:mb-2"
              v-for="heading of blok.flexHeadings"
              :heading="heading"
            />
            <StoryblokHeading
              class="lg:mb-3"
              v-for="heading of blok.colorHeadings"
              :heading="heading"
            />
          </div>
          <StoryblokHeading
            class="mb-5 xl:pe-8"
            v-for="heading of blok.bodyHeadings"
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
          class="col-span-12 sm:col-span-5 md:col-span-5 lg:col-span-5 flex justify-center order-first sm:order-last"
        >
          <NuxtImg
            class="lg:w-full lg:h-full md:h-full md:w-full sm:w-56 sm:h-60 w-96 lg:ms-5"
            v-if="
              (blok.images.filename && $route.path === '/') || $route.path === '/home'
            "
            :src="blok.images.filename"
            alt="images"
            format="webp"
            style="clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)"
          ></NuxtImg>
        </article>
      </section>

      <!-- Services Details -->
      <section class="grid grid-cols-12 gap-2" v-else>
        <article
          class="col-span-12 sm:col-span-7 md:col-span-7 lg:col-span-7"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <StoryblokHeading
            class="md:mb-2"
            v-for="heading of blok.headings"
            :heading="heading"
          />
          <StoryblokHeading
            class="md:mb-5"
            v-for="heading of blok.colorHeadings"
            :heading="heading"
          />
          <StoryblokHeading
            class="mb-5 xl:pe-8"
            v-for="heading of blok.bodyHeadings"
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
          class="col-span-12 sm:col-span-5 md:col-span-5 lg:col-span-5 flex justify-center order-first sm:order-last"
        >
          <NuxtImg
            class="lg:w-full lg:h-full md:h-[21rem] xl:h-[30rem] md:w-full sm:w-56 sm:h-60 w-96 lg:ms-0"
            v-if="isOtherRouter"
            :src="blok.images.filename"
            alt="images"
            style="clip-path: polygon(5% 25%, 52% 0, 93% 25%, 93% 76%, 46% 100%, 5% 71%)"
          ></NuxtImg>
        </article>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineProps, PropType } from "vue";
import { useRoute } from "vue-router";
import { storyblokGrid } from "../types/grid";
const props = defineProps({
  blok: {
    type: Object as PropType<storyblokGrid>,
    default: null,
  },
});
const route = useRoute();
const isOtherRouter = computed(() => {
  const targetPaths = [
    "/about",
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
</script>
