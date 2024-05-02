<template>
  <div>
    <div class="screenContainer mt-14 overflow-hidden">
      <div class="grid grid-cols-12 gap-4 items-end">
        <div
          class="xl:col-span-6 md:col-span-5 sm:col-span-5 col-span-12"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <StoryblokHeading
            class="mt-3"
            v-for="heading of blok.headings"
            :heading="heading"
          />
        </div>
        <div
          class="xl:col-span-6 md:col-span-7 sm:col-span-7 col-span-12"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <div class="flex justify-end items-start -mt-10 mb-0">
            <StoryblokBtn
              v-for="button of blok.buttons"
              class="py-3 px-5"
              :button="button"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- silder -->
    <section class="section slider-section overflow-hidden">
      <swiper
        :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
        :modules="modules"
        :loop="true"
        :centeredSlides="true"
        class="w-full relative swiper-container"
        :scrollbar="{ draggable: true }"
        :breakpoints="{
          480: {
            slidesPerView: 1.25,
            spaceBetween: 15,
            resistanceRatio: 0.85,
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 15,
            resistanceRatio: 0,
          },
          980: {
            slidesPerView: 2.25,
            spaceBetween: 15,
            resistanceRatio: 0,
          },
          1280: {
            slidesPerView: 2.25,
            spaceBetween: 20,
            resistanceRatio: 0,
          },
        }"
      >
        <!-- Custom pagination layout   v-for="card in blok.services" -->
        <section
          class="parallax-slider-navigation cursor-pointer absolute inset-x-0 md:-bottom-3 lg:-bottom-8 xl:-bottom-11 2xl:-bottom-24 flex justify-center items-end"
        >
          <article class="nav-indicator prevArrow">
            <NuxtImg
              :src="blok.previmage.filename"
              :alt="blok.previmage.alt"
              class="w-10 absolute z-40 lg:mb-10 left-[-5px]"
              format="webp"
            />
          </article>
          <article class="nav-indicator nextArrow">
            <NuxtImg
              :src="blok.nextimage.filename"
              :alt="blok.nextimage.alt"
              class="w-10 absolute z-40 right-[-5px]"
              format="webp"
            />
          </article>
        </section>
        <!-- Slides -->
        <!-- <swiper-slide v-for="image in images" :key="image.id" class="py-5 pb-24 md:pb-40">
          <img :src="image.src" :alt="image.alt" class="swiper-slide" />
        </swiper-slide> -->
        <swiper-slide
          v-for="card in blok.fleetCardDetailSilders"
          :key="card.uuid"
          class="py-5 pb-24 md:pb-32"
        >
          <FleetCardDetail
            :cardDetails="card"
            class="swiper-slide"
            data-aos="flip-down"
            data-aos-duration="2000"
          />
        </swiper-slide>
      </swiper>
    </section>

    <!-- ksjfksdjfk -->
    <!-- <section class="section slider-section overflow-hidden">
      <div class="2xl:container slider-column">
        <swiper
          :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
          :loop="true"
          :centeredSlides="true"
          class="swiper swiper-slider"
          :scrollbar="{ draggable: true }"
          :breakpoints="{
            640: {
              slidesPerView: 1.25,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }"
        >
          <swiper-slide v-for="image in images" :key="image.id">
            <img :src="image.src" :alt="image.alt" class="swiper-slide" />
          </swiper-slide>

          <section
            class="parallax-slider-navigation cursor-pointer absolute inset-x-0 md:-bottom-3 lg:-bottom-8 xl:-bottom-11 2xl:-bottom-24 flex justify-center items-end"
          >
            <article class="nav-indicator prevArrow">
              <NuxtImg
                :src="blok.previmage.filename"
                :alt="blok.previmage.alt"
                class="w-10 absolute z-40 lg:mb-10 left-[-5px]"
              />
            </article>
            <article class="nav-indicator nextArrow">
              <NuxtImg
                :src="blok.nextimage.filename"
                :alt="blok.nextimage.alt"
                class="w-10 absolute z-40 right-[-5px]"
              />
            </article>
          </section>
        </swiper>
      </div>
    </section> -->
  </div>
</template>
<script setup lang="ts">
import { ref, computed, defineProps, PropType } from "vue";
import FleetCardDetail from "../components/FleetCardDetail.vue";
import { storyblokFleetDetail } from "../types/fleetDetail";
// import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/vue/24/outline";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/less";
import "swiper/less/navigation";
import "swiper/less/pagination";
import { Navigation, Pagination } from "swiper/modules";

const modules = [Navigation, Pagination];
const props = defineProps({
  blok: {
    type: Object as PropType<storyblokFleetDetail>,
    default: null,
  },
});
</script>
<style scoped>
.swiper-wrapper {
  transform: translate3d(0, 0, 0) !important;
}
.section-swiper {
  margin: 0 auto;
  padding-block: 5rem;
}
.swiper-container {
  max-width: 100%;
  height: auto;
}
.prevArrow,
.nextArrow {
  width: 60px;
  height: 60px;
  position: absolute;
  cursor: pointer;
  padding: 0 0 7%;
}

.prevArrow {
  left: 44.5%;
}

.nextArrow {
  right: 44.5%;
}

@media screen and (max-width: 991px) {
  .prevArrow {
    left: 39%;
  }

  .nextArrow {
    right: 39%;
  }
}
@media screen and (max-width: 780px) {
  .prevArrow {
    left: 44%;
  }

  .nextArrow {
    right: 44%;
  }
}
@media screen and (max-width: 640px) {
  .prevArrow {
    left: 25%;
  }

  .nextArrow {
    right: 25%;
  }
}
</style>
