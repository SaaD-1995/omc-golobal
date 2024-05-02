<template>
  <div v-editable="blok" class="bg-bgAbout pt-20 pb-10 overflow-hidden">
    <section class="screenContainer">
      <!-- <pre class="text-black">{{ blok }}</pre> -->
      <StoryblokHeading
        data-aos="zoom-in-down"
        data-aos-duration="2000"
        class="mb-0"
        v-for="heading of blok.headings"
        :heading="heading"
      />
      <article
        class="flex justify-center gap-2 lg:gap-4"
        data-aos="zoom-in-down"
        data-aos-duration="2000"
      >
        <StoryblokHeading
          class="mb-0"
          v-for="heading of blok.flexHeadings"
          :heading="heading"
        />
        <StoryblokHeading
          class="mb-0"
          v-for="heading of blok.colorHeadings"
          :heading="heading"
        />
      </article>
      <!-- <article
        class="carousel-container flex overflow-hidden mt-10 cursor-pointer"
        data-aos="flip-up"
        data-aos-duration="2000"
        @mousedown="startDragging($event)"
        @mouseup="stopDragging()"
        @mousemove="dragging && handleDragging($event)"
        @mouseleave="stopDragging()"
      >
        <ServiceCard
          v-for="card of blok.services"
          :card="card"
          :key="card.uuid"
          class="card-carousel me-5 sm:me-10 w-[300px] sm:[360px] md:w-[370px] lg:w-full"
          :style="{ transform: `translateX(${-currentIndex * cardWidth}px)` }"
        />
      </article>

      <section class="block sm:flex justify-center items-center mt-10 pb-10">
        <article
          class="flex items-center justify-center"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <button
            @click="prevSlide()"
            :disabled="isPrevDisabled"
            class="border-2 p-[5px] border-[#152B14] rounded-full disabled:opacity-50 mt-2"
          >
            <ChevronLeftIcon class="h-5 w-5 text-[#152B14] font-medium" />
          </button>
          <div class="dots ps-5 pe-5">
            <span
              v-for="(service, index) in services"
              :key="service"
              :class="{ active: index === currentIndex }"
              @click="goToCard(index)"
            ></span>
          </div>
          <button
            @click="nextSlide()"
            :disabled="isNextDisabled"
            class="border-2 p-[5px] border-[#152B14] rounded-full mt-2"
          >
            <ChevronRightIcon class="h-5 w-5 text-[#152B14] font-medium" />
          </button>
        </article>
        <article class="sm:mt-3 mt-5 ms-5">
          <StoryblokBtn
            v-for="button of blok.buttons"
            :button="button"
            data-aos="fade-left"
            data-aos-duration="2000"
          />
        </article>
      </section> 
     768: { slidesPerView: 1 },
          991: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          max-w-full md:max-w-[50%] ps-0 md:ps-0 lg:ps-0 lg:max-w-[100%]
    -->

      <!-- srvice sliders -->
      <section class="overflow-hidden">
        <swiper
          :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
          :pagination="{ clickable: true }"
          :modules="modules"
          :loop="true"
          :centeredSlides="true"
          class="w-full relative swiper-container"
          :scrollbar="{ draggable: true }"
          :breakpoints="{
            480: {
              slidesPerView: 1,
              spaceBetween: 15,
              resistanceRatio: 0.85,
            },

            768: {
              slidesPerView: 2,
              spaceBetween: 15,
              resistanceRatio: 0,
            },
            980: {
              slidesPerView: 2,
              spaceBetween: 15,
              resistanceRatio: 0,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 20,
              resistanceRatio: 0,
            },
          }"
        >
          <!-- Custom pagination layout   v-for="card in blok.services" -->
          <section
            class="parallax-slider-navigation cursor-pointer absolute inset-x-0 md:-bottom-0 lg:-bottom-8 xl:-bottom-11 2xl:-bottom-24 flex justify-center items-end"
          >
            <article class="nav-indicator prevArrow">
              <NuxtImg
                :src="blok.previmage.filename"
                :alt="blok.previmage.alt"
                format="webp"
                class="w-10 relative z-40 left-[-5px]"
              />
            </article>
            <article class="nav-indicator nextArrow">
              <NuxtImg
                :src="blok.nextimage.filename"
                :alt="blok.nextimage.alt"
                format="webp"
                class="w-10 relative z-40 right-[-5px]"
              />
            </article>
          </section>
          <!-- Slides -->
          <swiper-slide
            v-for="card in blok.silderServiceCard"
            class="py-5 pb-24 md:pb-20 relative z-50"
            :class="{
              'swiper-slide': true,
              'sm:w-full': true,
              'md:w-1/2': true,
              'lg:w-1/3': true,
            }"
          >
            <ServiceCard :card="card" />
          </swiper-slide>
        </swiper>
        <article class="sm:mt-3 mt-5 flex justify-center items-center">
          <StoryblokBtn
            v-for="button of blok.buttons"
            :button="button"
            data-aos="fade-left"
            data-aos-duration="2000"
          />
        </article>
      </section>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, watchEffect, computed, onMounted } from "vue";
import type { PropType } from "vue";
import { storyblokFeaturedServices } from "../types/featuredServices";
import ServiceCard from "./ServiceCard.vue";
// import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/outline";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/less";
import "swiper/less/navigation";
import "swiper/less/pagination";
import { Navigation, Pagination } from "swiper/modules";
const modules = [Navigation, Pagination];
const props = defineProps({
  blok: {
    type: Object as PropType<storyblokFeaturedServices>,
    default: null,
  },
});
</script>

<style scoped>
.swiper-pagination {
  display: flex;
  justify-content: center;
}

.swiper-pagination span {
  width: 8px;
  height: 8px;
  margin: 0 5px;
  background-color: #ddd;
  border-radius: 50%;
  cursor: pointer;
}

.swiper-pagination span.active {
  background-color: #4eae32;
}

.prevArrow,
.nextArrow {
  width: 40px;
  height: 40px;
  position: absolute;
  bottom: 0;
  cursor: pointer;
  padding: 0 0 8%;
}

.prevArrow {
  left: 40%;
}

.nextArrow {
  right: 40%;
}
.dots span.active {
  background: #4eae32; /* Active dot color */
}
:deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  margin: 20% 4px 0 !important;
}
:deep(.swiper-pagination-bullet-active) {
  background-color: #4eae32 !important ; /* Replace with your desired color */
}
:deep(.swiper-pagination) {
  margin-bottom: 0px;
}
.swiper-slide-active .card-body {
  box-shadow: 0px 10px 20px 0px #ddd !important;
}
.swiper-slide-active .card-body .btn {
  filter: contrast(2.5) !important;
  color: black;
}
@media (min-width: 1535px) {
  .prevArrow,
  .nextArrow {
    width: 40px;
    height: 40px;
    position: absolute;
    bottom: 0;
    cursor: pointer;
    padding: 0 0 17.5%;
  }
}
@media screen and (max-width: 991px) {
  .prevArrow {
    left: 30%;
  }

  .nextArrow {
    right: 30%;
  }
}
@media screen and (max-width: 780px) {
  :deep(.swiper-pagination) {
    margin-left: 0px;
  }
  .prevArrow {
    left: 35%;
  }

  .nextArrow {
    right: 35%;
  }
}
@media screen and (max-width: 640px) {
  :deep(.swiper-pagination) {
    margin-left: 0px;
  }
  .prevArrow {
    left: 18%;
  }

  .nextArrow {
    right: 18%;
  }
}
</style>
