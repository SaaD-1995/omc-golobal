<template>
  <div class="screenContainer mt-0 pt-32 overflow-hidden">
    <StoryblokHeading
      class="mb-5"
      v-for="heading of blok.headings"
      :heading="heading"
      data-aos="zoom-in-down"
      data-aos-duration="2000"
    />

    <!-- Rating Top bar -->
    <div class="md:flex justify-between items-center block">
      <ReviewsTopBar
        :actions="blok.topActions"
        data-aos="fade-right"
        data-aos-duration="2000"
      />
      <StoryblokBtn
        v-for="button of blok.buttons"
        :button="button"
        data-aos="fade-left"
        data-aos-duration="2000"
      />
    </div>
    <section
      class="grid items-start gap-5 mt-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
    >
      <ReviewsCard :review="review" v-for="review of googleReviews" />
    </section>

    <ReviewsBottomBar :actions="blok.bottomActions" class="mt-7" />
    <div>
      <ContactForm />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, PropType } from "vue";
import { getReviewsOfGoogle, useGoogleReviews } from "../composables/reviews";
import { storyblokReviewsSection, googleReview } from "../types/googleReviews";
// import { ContactForm } from "../components/ContactForm.vue";

const props = defineProps({
  blok: { type: Object as PropType<storyblokReviewsSection>, default: null },
});

// const googleReviews: googleReview[] = useGoogleReviews();
const googleReviews: googleReview[] = [
  {
    author_name: "Shuja",
    author_url: "https://www.google.com/maps/contrib/111582740197240088031/reviews",
    language: "en",
    original_language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a/ACg8ocIibL_lBIIK-lw-7vgRI-hYVgm7osXBIlHxM3KxG_Tf=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relative_time_description: "a week ago",
    text:
      "Easy online payment on the website and first-class service make it ideal for a family venture. We loved the desert driver, quad bikes, and lovely eagle handling. The camp was impeccably clean and luxurious. Thank you for your help. Sandubai is the company we trust and will use again soon on our next trip to Dubai.",
    time: 1704292778,
    translated: false,
  },
  {
    author_name: "Amber J",
    author_url: "https://www.google.com/maps/contrib/116965178939392607619/reviews",
    language: "en",
    original_language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/ALV-UjVaCZTlOrm4hZZUCD3CwyXpbmloU2G6kHfLE9TKoC-bsCM=s128-c0x00000000-cc-rp-mo",
    rating: 5,
    relative_time_description: "a week ago",
    text:
      "For my family day out I choose Sandubai. It turned out to be the best Dune bashing experience.  Easy online booking, friendly staff, full of fun.  I definetely recommend them if you are looking for a thrilling adventure.",
    time: 1704338675,
    translated: false,
  },
  {
    author_name: "Mohan Raj",
    author_url: "https://www.google.com/maps/contrib/108943378039672103627/reviews",
    language: "en",
    original_language: "en",
    profile_photo_url:
      "https://lh3.googleusercontent.com/a-/ALV-UjU8vv0omZ94ShRO139jH9DmXfiBuQ3m0r35op5pNt_wtno=s128-c0x00000000-cc-rp-mo-ba2",
    rating: 5,
    relative_time_description: "a week ago",
    text:
      "The best experience we had, easy and quick booking method gives you a better startup ride! Thank you for nice and friendly services, highly recommended you can make your day without having any hassle!!",
    time: 1704330338,
    translated: false,
  },
  // {
  //   author_name: "Ch Faizan",
  //   author_url: "https://www.google.com/maps/contrib/105616607374118621894/reviews",
  //   language: "en",
  //   original_language: "en",
  //   profile_photo_url:
  //     "https://lh3.googleusercontent.com/a-/ALV-UjXrXipt0SdH0UR6f8xX89ITdnZJn7713XSxRunW7JDw5w=s128-c0x00000000-cc-rp-mo",
  //   rating: 5,
  //   relative_time_description: "a week ago",
  //   text:
  //     "Amazing rides it was my best experience in desert first time nice to book with you easy payment method trustable",
  //   time: 1704262746,
  //   translated: false,
  // },
  // {
  //   author_name: "Jishnu Gopi nath",
  //   author_url: "https://www.google.com/maps/contrib/101691775761514471415/reviews",
  //   language: "en",
  //   original_language: "en",
  //   profile_photo_url:
  //     "https://lh3.googleusercontent.com/a-/ALV-UjXE8sUKQtbiYGUkL_fhNN9KfY8KSJn-Ffo_31KQU4J62hk=s128-c0x00000000-cc-rp-mo",
  //   rating: 5,
  //   relative_time_description: "a week ago",
  //   text:
  //     "Thanks making my life best experience in desert guide was nice driver was excellent we enjoy alot with our family online easy payment method 😍",
  //   time: 1704262989,
  //   translated: false,
  // },
];

onMounted(async () => {
  // console.log("asdfasdfsadf");
  //   await getReviewsOfGoogle();
});
</script>

<style scoped></style>
../composable/reviews
