<template>
  <component class="text-" :class="classes" :is="heading?.type">
    {{ heading?.text }}
  </component>
</template>

<script setup lang="ts">
import { PropType, computed } from "vue";
import { storyblokHeadings } from "../../types/storyblokMain";

const classes = computed(() => {
  return [
    {
      "text-primary": props.heading?.color == "primary",
      "text-secondary": props.heading?.color == "secondary",
      "text-white": props.heading?.color == "white",
      "text-black": props.heading?.color == "black",
      "text-textGray1": props.heading?.color == "textGray1",
      "text-textGray2": props.heading?.color == "textGray2",
      "text-textGray3": props.heading?.color == "textGray3",
      "text-textGray4": props.heading?.color == "textGray4",
      "text-textGray5": props.heading?.color == "textGray5",
      "text-textGray6": props.heading?.color == "textGray6",
      "text-text1": props.heading?.color == "text1",
      "text-text2": props.heading?.color == "text2",
      "text-text3": props.heading?.color == "text3",
      "text-text4": props.heading?.color == "text4",
      "text-text5": props.heading?.color == "text5",
      "text-transparent bg-gradient-to-r from-[#3AAA35] via-[#95C11F] to-[#BDC200] bg-clip-text":
        props.heading?.color == "gradient",
      "text-xs": props.heading?.size == "xs",
      "text-sm": props.heading?.size == "sm",
      "text-base": props.heading?.size == "base",
      "text-lg": props.heading?.size == "lg",
      "text-xl": props.heading?.size == "xl",
      " text-xl sm:text-xl md:text-2xl": props.heading?.size == "2xl",
      " text-xl sm:text-2xl md:text-3xl": props.heading?.size == "3xl",
      "text-4xl": props.heading?.size == "4xl",
      "text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-semibold":
        props.heading?.size == "5xl",
      // "text-6xl font-semibold": props.heading?.size == "6xl",
      "text-3xl font-semibold  sm:text-2xl md:text-4xl lg:text-5xl xl:text-[53px] ":
        props.heading?.size == "6xl",
      "text-4xl font-semibold sm:text-6xl md:text-4xl md:text-5xl lg:text-6xl  xl:text-7xl":
        props.heading?.size == "7xl",
      "text-xl font-semibold sm:text-2xl md:text-4xl md:text-6xl lg:text-7xl xl:text-8xl":
        props.heading?.size == "8xl",
      "text-xl font-semibold sm:text-2xl md:text-4xl md:text-6xl lg:text-7xl xl:text-9xl ":
        props.heading?.size == "9xl",
      "text-left": props.heading?.align == "left",
      "text-right": props.heading?.align == "right",
      "text-center": props.heading?.align == "center",
      capitalize: props.heading?.style == "capitalize",
      uppercase: props.heading?.style == "uppercase",
      lowercase: props.heading?.style == "lowercase",
      "tracking-normal": props.heading?.space == "normal",
      "tracking-wide": props.heading?.space == "wide",
      "tracking-wider": props.heading?.space == "wider",
      "tracking-widest": props.heading?.space == "widest",
      "font-semibold": props.heading?.weight == "semibold",
      "font-medium": props.heading?.weight == "medium",
      "font-light": props.heading?.weight == "light",
      "font-bold": props.heading?.weight == "bold",
    },
  ];
});

const props = defineProps({
  heading: { type: Object as PropType<storyblokHeadings> },
});
</script>

<style scoped></style>
