<template>
  <div class="screenContainer pt-20 lg:pb-20 overflow-hidden">
    <StoryblokHeading
      data-aos="fade-down"
      data-aos-duration="2000"
      class="mb-0"
      v-for="heading of blok.headings"
      :heading="heading"
    />
    <div
      class="w-full mt-9 mb-10 sm:mt-8 md:mt-16 lg:mt-10 sm:mb-10 md:mb-20 lg:mb-10 relative h-[45vh] sm:h-[60vh] md:h-[65vh] lg:h-[100vh] flex justify-center items-center"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <iframe
        width="100%"
        height="100%"
        :src="blok.videos.cached_url"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        class="rounded-3xl"
      ></iframe>
      <div class="relative">
        <button class="text-white" @click="togglePlayPause">
          <PlayCircleIcon v-if="playVideo" class="w-16 h-16 text-white" />
          <PauseCircleIcon v-if="pauseVideo" class="w-16 h-16 text-white" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import type { PropType } from "vue";
import { storyblokFleetVideo } from "../types/fleetVideo";
import { PlayCircleIcon, PauseCircleIcon } from "@heroicons/vue/24/outline";
// import { ref, computed } from "vue";
const playVideo = ref(true);
const pauseVideo = ref(false);
const videoPlayer = ref<HTMLVideoElement | null>(null);
const props = defineProps({
  blok: {
    type: Object as PropType<storyblokFleetVideo>,
    default: null,
  },
});
const togglePlayPause = () => {
  if (videoPlayer.value) {
    if (videoPlayer.value.paused) {
      videoPlayer.value.play();
      playVideo.value = false;
      pauseVideo.value = true;
    } else {
      videoPlayer.value.pause();
      playVideo.value = true;
      pauseVideo.value = false;
    }
  }
};
</script>
