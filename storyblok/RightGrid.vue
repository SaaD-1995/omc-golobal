<template>
  <div
    class="bg-bgAbout pb-20 overflow-hidden"
    v-if="$route.path === '/' || $route.path === '/home'"
  >
    <div class="screenContainer mx-auto px-4">
      <div class="grid grid-cols-12 gap-4 pt-20">
        <div
          class="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-5"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <NuxtImg
            class="lg:w-[30rem] lg:h-[550px] xl:h-full md:w-[30rem] md:h-full sm:w-80 sm:h-96 w-96"
            :src="blok.image.filename"
            format="webp"
            style="
              clip-path: polygon(
                50% 0%,
                85% 14%,
                98% 49%,
                87% 88%,
                50% 100%,
                11% 88%,
                0 51%,
                13% 14%
              ); ;
            "
            alt="images"
          ></NuxtImg>
        </div>
        <div
          class="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-7"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <StoryblokHeading v-for="heading of blok.headings" :heading="heading" />

          <StoryblokHeading
            class="md:mb-3 mt-3"
            v-for="heading of blok.flexHeadings"
            :heading="heading"
          />

          <div class="md:block">
            <StoryblokHeading
              class="md:mb-3"
              v-for="heading of blok.subHeadings"
              :heading="heading"
            />
            <StoryblokHeading
              class="md:mb-3"
              v-for="heading of blok.colorHeadings"
              :heading="heading"
            />
          </div>
          <StoryblokHeading
            class="mb-5 md:pe-10 lg:pe-10"
            v-for="heading of blok.bodyHeadings"
            :heading="heading"
          />
          <div class="mt-8 flex justify-start">
            <StoryblokBtn
              v-for="button of blok.buttons"
              class="py-3 px-5"
              :button="button"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pt-20 pb-20 overflow-hidden" v-else>
    <div class="screenContainer mx-auto px-4">
      <div
        class="flex justify-center gap-2 lg:gap-4"
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        <StoryblokHeading v-for="heading of blok.headings" :heading="heading" />
        <StoryblokHeading v-for="heading of blok.colorHeadings" :heading="heading" />
      </div>
      <div class="grid grid-cols-12 gap-4 pt-20">
        <div
          class="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <NuxtImg
            class="lg:w-[30rem] lg:h-[550px] md:w-[30rem] md:h-96 sm:w-80 sm:h-96 w-96"
            :src="blok.image.filename"
            style="clip-path: polygon(50% 0%, 100% 48%, 50% 100%, 0 49%)"
            alt="images"
            format="webp"
          ></NuxtImg>
        </div>
        <div
          class="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <StoryblokHeading
            class="mb-5"
            v-for="heading of blok.subHeadings"
            :heading="heading"
          />
          <div class="mt-8 flex justify-start">
            <StoryblokBtn
              v-for="button of blok.buttons"
              class="py-3 px-5"
              :button="button"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import type { PropType } from "vue";
import { storyblokRightGrid } from "../types/rightGrid";
const props = defineProps({
  blok: {
    type: Object as PropType<storyblokRightGrid>,
    default: null,
  },
});
</script>
