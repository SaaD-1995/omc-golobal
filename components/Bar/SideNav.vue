<script setup lang="ts">
import "hamburgers/dist/hamburgers.min.css";
import { storyblokNavbar } from "../../types/navbar";
import { storyblokLink } from "../../utils/storyblokLink";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { PropType } from "vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();
function isActiveLink(linkUrl) {
  return linkUrl === route.path;
}
const props = defineProps({
  navData: { type: Object as PropType<storyblokNavbar>, default: null },
  closeSidebar: {
    type: Function as PropType<() => void>,
    required: true,
  },
});
</script>

<template>
  <div
    class="h-full navContainer bg-[#EAEEEA] fixed sm:inset-y-0 sm:z-30 sm:flex sm:w-[324px] w-full sm:flex-col p-8 bloxk lg:hidden"
  >
    <section>
      <div class="flex justify-between sm:justify-center items-center">
        <NuxtImg class="w-32" :src="navData?.logoSidebar?.filename" format="webp" />
        <XMarkIcon
          class="w-8 h-8 mr-4 mb-3 text-black block sm:hidden cursor-pointer"
          @click="closeSidebar"
        />
      </div>
      <!-- :to="link.link?.story?.url || '/'" -->
      <article class="flex flex-col gap-5 mt-10">
        <NuxtLink
          v-for="link in navData?.headerItems"
          :key="link.label"
          :to="link.link?.story?.url ? storyblokLink(link.link.story.url) || '/' : '/'"
          :class="{
            'md:text-base font-normal text-navbarlink text-[#AFAFAF] relative': true,
            ' text-black font-medium transition-all duration-500': isActiveLink(
              link.link?.story?.url
            ),
          }"
          >{{ link.label }}</NuxtLink
        >
      </article>
    </section>
    <footer class="mt-auto">
      <StoryblokBtn
        class="mt-5"
        :class="!!i ? 'hidden' : ''"
        v-for="(button, i) of navData.buttons"
        :button="button"
        :key="i"
      />
    </footer>
  </div>
</template>

<style scoped></style>
