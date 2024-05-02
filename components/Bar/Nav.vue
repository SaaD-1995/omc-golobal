<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { storyblokLink } from "../../utils/storyblokLink";
import { getNavData, useNavData } from "../../composables/storyblok";
import { Bars3Icon } from "@heroicons/vue/24/solid";
import { storyblokNavbar } from "../../types/navbar";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import { XMarkIcon } from "@heroicons/vue/24/outline";
const router = useRouter();
const route = useRoute();
const navData: storyblokNavbar = useNavData();
const showSidebar = ref(false);
const sideBarRef = ref();

function openSidebar() {
  showSidebar.value = true;
  setTimeout(() => {
    sideBarRef.value.focus();
  }, 0);
}
function closeSidebar() {
  setTimeout(() => {
    showSidebar.value = false;
  }, 0);
}
function isActiveLink(linkUrl) {
  return linkUrl === route.path;
}

const setBgGray = ref(false);

onMounted(async () => {
  await getNavData();
  window.addEventListener("scroll", () => {
    setBgGray.value = window.scrollY > 100;
  });
});
const isTargetRoute = computed(() => {
  const targetPaths = [
    "/",
    "/home",
    "/about",
    "/service",
    "/fleet",
    "/contact",
    "/services-detail",
    "/fleet-detail",
    "/get-a-quote",
    "/thank-you",
    "/fleet/mercedes-vito",
    "/fleet/wc-mercedes-sprinter",
    "/fleet/mercedes-sprinters",
    "/fleet/mercedes-sprinter",
    "/fleet/jet-class",
    "/fleet/mercedes-sprinter-1",
    "/fleet/isuszu-grand-toro",
    "/fleet/neoplan-tourliner",
    "/fleet/iveco-daily",
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
</script>

<template>
  <div>
    <!-- other pages -->
    <div
      v-if="isTargetRoute"
      class="fixed z-50 w-screen navContainer py-6 border-b-[1px] border-[#ffffff96]"
      :class="setBgGray ? 'bg-[#25202098] backdrop-blur-2xl' : ''"
    >
      <section class="sticky top-0 flex items-center justify-between" v-if="!!navData">
        <!-- logo -->
        <NuxtLink to="/" class="text-white">
          <NuxtImg
            class="w-20 md:w-32"
            :src="navData?.logo?.filename"
            :alt="navData?.logo?.alt"
            format="webp"
          />
        </NuxtLink>
        <!-- Links for navbar -->
        <article class="gap-9 hidden lg:flex">
          <NuxtLink
            v-for="link of navData?.headerItems"
            :key="link.label"
            :to="link.link?.story?.url ? storyblokLink(link.link.story.url) || '/' : '/'"
            :class="{
              'md:text-base font-normal text-navbarlink text-[#AFAFAF] relative': true,
              ' text-white font-medium transition-all duration-500': isActiveLink(
                link.link?.story?.url
              ),
            }"
          >
            {{ link.label }}
            <div
              v-if="isActiveLink(link.link?.story?.url)"
              class="bg-white mt-2 h-[1.5px] w-full absolute"
            ></div>
          </NuxtLink>
        </article>
        <div class="flex flex-row items-center gap-4">
          <article>
            <div class="flex items-center gap-2">
              <a
                href="tel:+015588833336"
                type="tel"
                class="border-[1px] rounded-lg bg-white px-2 py-3 text-base text-primary font-medium hover:text-white hover:bg-primary transition-all hidden lg:block"
              >
                {{ navData?.number }}</a
              >
              <StoryblokBtn
                :class="!!i ? '' : 'hidden lg:block'"
                v-for="(button, i) of navData.actions"
                :button="button"
                :key="i"
              />
            </div>
          </article>
          <button @click="openSidebar" class="lg:hidden z-50">
            <transition name="fade">
              <div>
                <Bars3Icon v-if="!showSidebar" class="w-8 h-8 mr-4 text-white" />
                <XMarkIcon v-if="showSidebar" class="w-8 h-8 mr-4 text-white" />
              </div>
            </transition>
          </button>
        </div>
      </section>
    </div>
    <!-- 404 page -->

    <div
      class="fixed w-screen navContainer py-6 border-b-[1px] border-primary bg-white"
      v-else
      :class="setBgGray ? 'bg-[#5f5d5d52] backdrop-blur-2xl' : ''"
    >
      <section class="flex items-center justify-between" v-if="!!navData">
        <!-- logo -->
        <nuxt-link to="/">
          <NuxtImg
            class="w-20 md:w-28"
            v-if="navData?.logo404"
            :src="navData?.logo404?.filename"
            format="webp"
          />
        </nuxt-link>
        <!-- Links for navbar -->
        <article class="gap-9 hidden lg:flex">
          <NuxtLink
            v-for="link of navData?.headerItems"
            :key="link.label"
            :to="link.link?.story?.url ? storyblokLink(link.link.story.url) || '/' : '/'"
            :class="{
              'md:text-base font-normal text-navbarlink text-[#AFAFAF] relative': true,
              ' text-black font-medium transition-all duration-500': isActiveLink(
                link.link?.story?.url
              ),
            }"
          >
            {{ link.label }}
            <div
              v-if="isActiveLink(link.link?.story?.url)"
              class="bg-black mt-2 h-[1.5px] w-full absolute"
            ></div>
          </NuxtLink>
        </article>
        <div class="flex flex-row items-center gap-0">
          <article>
            <div class="flex items-center gap-2">
              <a
                href="tel:+015588833336"
                type="tel"
                class="border-[1px] rounded-lg bg-secondary px-2 py-3 text-base text-white font-medium hover:text-secondary hover:bg-white hover:border-secondary transition-all hidden lg:block"
              >
                {{ navData?.number }}</a
              >
              <StoryblokBtn
                :class="!!i ? '' : 'hidden lg:block'"
                v-for="(button, i) of navData.buttons404"
                :button="button"
                :key="i"
              />
            </div>
          </article>
          <!-- Icon to open and close the side nav bar for small screens -->
          <button @click="openSidebar" class="lg:hidden z-50">
            <transition name="fade">
              <div>
                <Bars3Icon v-if="!showSidebar" class="w-8 h-8 mr-4 text-black" />
                <XMarkIcon v-if="showSidebar" class="w-8 h-8 mr-4 text-black" />
              </div>
            </transition>
          </button>
        </div>
      </section>
    </div>

    <!-- Vertical nav bar for small screen -->
    <Transition name="fade">
      <div
        ref="sideBarRef"
        tabindex="0"
        v-if="showSidebar"
        @focusout="showSidebar = false"
        class="fixed left-0 z-50 h-screen sm:w-52 w-full lg:hidden"
      >
        <BarSideNav :navData="navData" :close-sidebar="closeSidebar" />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  left: -400px;
  opacity: 0.5;
  filter: blur(0.7rem);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}
</style>
../../composable/storyblok
