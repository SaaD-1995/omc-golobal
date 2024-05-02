<template>
  <div class="slide-container swiper">
    <div class="slide-content swiper-wrapper">
      <div v-for="(card, index) in cards" :key="index" class="card swiper-slide">
        <div class="image-content">
          <span class="overlay"></span>
          <div class="card-image">
            <img :src="card.image" alt="" class="card-img" />
          </div>
        </div>
        <div class="card-content">
          <h2 class="name">{{ card.name }}</h2>
          <p class="description">{{ card.description }}</p>
          <button class="button">View More</button>
        </div>
      </div>
    </div>
    <div class="swiper-button-next swiper-navBtn"></div>
    <div class="swiper-button-prev swiper-navBtn"></div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script lang="ts">
import Swiper from "swiper/bundle";

interface Card {
  image: string;
  name: string;
  description: string;
}

export default defineComponent({
  data() {
    return {
      cards: [
        {
          image: "https://tinypic.host/images/2022/12/19/img_avatar.png",
          name: "Mohamed Yousef",
          description:
            "The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.",
        },
        {
          image: "https://tinypic.host/images/2022/12/19/img_avatar.png",
          name: "Mohamed Yousef",
          description:
            "The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.",
        },
        {
          image: "https://tinypic.host/images/2022/12/19/img_avatar.png",
          name: "Mohamed Yousef",
          description:
            "The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.",
        },
        {
          image: "https://tinypic.host/images/2022/12/19/img_avatar.png",
          name: "Mohamed Yousef",
          description:
            "The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.",
        },
        {
          image: "https://tinypic.host/images/2022/12/19/img_avatar.png",
          name: "Mohamed Yousef",
          description:
            "The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.",
        },
        // Add more cards as needed
      ] as Card[],
    };
  },
  mounted() {
    const swiper = new Swiper(".slide-content", {
      slidesPerView: 3,
      spaceBetween: 25,
      loop: true,
      centerSlide: true,
      fade: true,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,
        },
        950: {
          slidesPerView: 3,
        },
      },
    });
  },
});
</script>

<style scoped>
/* Tailwind CSS classes can be added here */
</style>
