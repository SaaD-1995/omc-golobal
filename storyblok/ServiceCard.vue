<template>
  <div
    class="lg:max-w-sm md:max-w-sm max-w-full rounded-lg relative sm:pt-10 pb-40 sm:pb-20 overflow-hidden"
    v-if="isRootPath"
  >
    <NuxtImg
      class="rounded-t-lg w-full absolute"
      v-if="card.bgAssets"
      :src="card.bgAssets.filename"
      alt="images"
      format="webp"
    />
    <div class="w-full h-full z-20 px-0 sm:px-0 flex justify-center relative">
      <div
        class="group rounded-lg bg-white shadow-lg sm:px-32 md:p-5 mx-4 lg:p-3 p-5 w-full h-[18rem] sm:h-72 md:h-72 lg:h-72 sm:h-72 mt-80 sm:mt-[28rem] md:mt-40 flex justify-center"
      >
        <div>
          <StoryblokHeading
            class="sm:mb-2 mt-4 heading"
            v-for="heading of card.headings"
            :heading="heading"
          />
          <hr class="mx-4 sm:mx-8 mb-[5rem] md:-mt-[4.5rem] sm:-mt-[3.5rem] -mt-[3rem]" />
          <div class="flex justify-center">
            <div
              class="sm:mt-5 mt-[2rem] flex justify-center items-center border-show py-1"
            >
              <StoryblokBtn v-for="button of card.buttons" :button="button" />
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2 hidden svg"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    v-else
    class="max-w-sm rounded-lg relative sm:pt-10 pb-8 sm:pb-5 overflow-hidden relative"
    data-aos="flip-left"
    data-aos-duration="2000"
  >
    <NuxtImg
      class="rounded-t-lg w-full absolute"
      v-if="card.bgAssets"
      :src="card.bgAssets.filename"
      alt="images"
      format="webp"
    />
    <div class="relative z-50 w-full h-full px-0 sm:px-0 flex justify-center">
      <div
        class="group rounded-lg bg-white shadow-lg sm:p-6 md:p-5 mx-4 lg:px-4 lg:py-0 p-5 w-full h-[18rem] sm:h-72 mt-40 flex justify-center"
      >
        <div>
          <StoryblokHeading
            class="sm:mb-2 mt-4 heading"
            v-for="heading of card.headings"
            :heading="heading"
          />
          <hr class="mx-4 sm:mx-8 mb-[5rem] md:-mt-[4.9rem] sm:-mt-[6rem] -mt-[4.3rem]" />
          <div class="flex justify-center">
            <div
              class="sm:mt-5 mt-[2rem] flex justify-center items-center border-show py-1"
            >
              <StoryblokBtn v-for="button of card.buttons" :button="button" />
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2 hidden svg"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { PropType, defineProps } from "vue";
const route = useRoute();
const isRootPath = route.path === "/" || route.path === "/home";
import { ServiceCard } from "../types/featuredServices";
const props = defineProps({
  card: { type: Object as PropType<ServiceCard>, default: null },
});
</script>

<style scoped>
.group:hover {
  background-color: #4eae32;
  transition: 0.9s;
  color: white;
}
.group:hover .heading {
  color: white;
  transition: 0.9s;
}
.border-show {
  border: 1.5px solid #234822;
  border-radius: 8px;
  width: 8rem;
  transition: 0.9s;
}
.group:hover .border-show {
  border-color: transparent;
  transition: 0.9s;
  border-radius: 8px;
  background: white;
  width: 10rem;
}
.group:hover svg {
  display: block;
  transition: 0.9s;
  justify-content: center;
  fill: white;
}
.group:hover hr {
  color: white;
  transition: 0.9s;
}
</style>
