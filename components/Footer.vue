<script setup lang="ts">
import { ref, onMounted, Ref } from "vue";
import { getFooterData, useFooterData } from "../composables/storyblok";
import { storyblokLink } from "../utils/storyblokLink";
import { Footer } from "../types/footer";
import { CalendarIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/vue/24/solid";

const currentYear = ref<number>(new Date().getFullYear());

const footerData: Ref<Footer> = useFooterData();

onMounted(async () => {
  await getFooterData();
  // console.log("Initial year:", currentYear.value);

  setInterval(() => {
    currentYear.value = new Date().getFullYear();
  }, 10000);
});
</script>

<template>
  <div class="screenContainer bg-[#161616] pt-10 pb-6 md:pt-16 overflow-hidden">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-12 sm:col-span-8 md:col-span-12 lg:col-span-6">
        <article>
          <NuxtImg
            class="w-32 md:w-36"
            v-if="footerData?.logo"
            :src="footerData?.logo?.filename ?? '/'"
            width="100"
            format="webp"
          />
          <table class="mt-10">
            <tr>
              <td>
                <p class="text-white text-base opacity-20 font-normal">
                  {{ footerData?.numberText }}
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="tel:+015588833336"
                  type="tel"
                  class="text-white text-2xl sm:text-3xl font-medium hover:text-primary transition-all"
                >
                  {{ footerData?.whatsappNumber }}</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <p class="text-white text-base opacity-20 font-normal">
                  {{ footerData?.emailText }}
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  href="mailto:sales@omcglobal.co.uk"
                  type="tel"
                  class="text-white text-2xl sm:text-3xl font-medium hover:text-primary transition-all"
                  >{{ footerData?.email }}</a
                >
              </td>
            </tr>
          </table>
        </article>
      </div>
      <div
        class="col-span-12 sm:col-span-4 md:col-span-6 lg:col-span-3 md:border-r md:border-[#FFF]"
      >
        <h6 class="text-white font-normal text-2xl">{{ footerData?.linkText }}</h6>
        <div class="flex flex-col gap-4 mt-5">
          <NuxtLink
            class="text-text3 text-base"
            :key="link.label"
            :to="link.link?.story?.url ? storyblokLink(link.link.story.url) || '/' : '/'"
            v-for="link of footerData?.companyLinks"
            >{{ link.label }}</NuxtLink
          >
        </div>
      </div>
      <div class="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3 md:ps-20">
        <h6 class="text-white font-normal text-2xl">Documents</h6>
        <p class="text-lg text-white pt-5">Privacy policy</p>
        <div class="flex md:justify-center items-center justify-start gap-2 mt-10">
          <StoryblokBtn
            class="text-white"
            v-for="(button, i) of footerData?.actions"
            :button="button"
          />
          <StoryblokBtn
            class="text-white p-2 -mt-3 pb-5 w-10 h-14"
            v-for="(button, i) of footerData?.buttonInstas"
            :button="button"
          />
        </div>
        <img src="../public/images/cards.webp" alt="" class="w-full mt-5" />
      </div>
    </div>
    <section class="flex flex-wrap flex-col md:flex-row md:justify-between gap-10">
      <article>
        <div class="flex items-center gap-3 my-4"></div>
      </article>
    </section>

    <hr class="border-text3 mt-10" />
    <div class="grid grid-cols-12 gap-6 pt-5">
      <div class="col-span-12 sm:col-span-7 md:col-span-8">
        <p
          class="opacity-[0.6] xl:text-base lg:text-sm sm:text-xs text-sm md:text-xs font-medium text-white text-center sm:text-left"
        >
          &copy; {{ currentYear }} OMC Global. All rights reserved. Registered in England
          and Wales, Company No: 08688747
        </p>
      </div>
      <div class="col-span-12 sm:col-span-5 md:col-span-4">
        <p
          class="xl:text-base lg:text-sm sm:text-xs text-sm md:text-xs font-medium text-white text-center sm:text-left"
        >
          <span class="font-normal text-white opacity-[0.6]"
            >Website Designed & Developed by</span
          >
          13 Pixels
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
../composable/storyblok
