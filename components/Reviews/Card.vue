<template>
  <div
    data-aos="flip-right"
    data-aos-duration="2000"
    class="transition-all duration-700 bg-[#F6F6F6] h-full cursor-pointer cardSm rounded-2xl group hover:scale-105 hover:shadow-2xl"
  >
    <InputRatings :rating="review.rating" />

    <p
      class="text-[#595959] text-xs sm:text-base md:text-xl mt-6 group-hover:scale-[1.01] group-hover:opacity-70 duration-700 transition-all"
    >
      “ {{ review.text }}”
    </p>

    <section
      class="mt-6 flex items-center gap-5 group-hover:scale-[0.95] group-hover:opacity-90 transition-all duration-700"
    >
      <NuxtImg :src="review.profile_photo_url" width="80" format="webp" />
      <article>
        <p class="text-xl font-semibold">{{ review.author_name }}</p>
        <p class="text-sm font-normal">{{ timeSinceToday(review.time) }}</p>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
import { googleReview } from "../../types/googleReviews";
import { PropType } from "vue";
import { StarIcon } from "@heroicons/vue/24/solid";
import { timeSinceToday } from "../../plugin/helper";
const props = defineProps({
  review: { type: Object as PropType<googleReview>, default: null },
});
</script>

<style scoped></style>
