<template>
  <div :class="classes" class="cursor-pointer transition-all duration-500 capitalize">
    <NuxtLink
      v-if="button?.type != 'icon'"
      class="flex gap-2 items-center justify-center"
      :to="button?.link.cached_url"
    >
      {{ button?.label }}
      <NuxtImg
        v-if="!!button?.icon.filename"
        class="h-7 w-7"
        :src="button?.icon?.filename"
      />
    </NuxtLink>
    <NuxtImg v-else :src="button?.icon.filename" class="h-12 w-12" format="webp" />
    <!-- <span v-if="button?.type != 'icon'" class="flex gap-2 items-center justify-center">
      {{ button?.label }}
      <NuxtImg
        v-if="!!button?.icon.filename"
        class="h-7 w-7"
        :src="button?.icon?.filename"
      />
    </span> -->
  </div>
</template>

<script setup lang="ts">
import { computed, PropType } from "vue";
import { storyblokButton } from "../../types/storyblokMain";

const props = defineProps({
  button: { type: Object as PropType<storyblokButton> },
});

const classes = computed(() => {
  return [
    {
      // Button types
      "bg-primary text-white": props.button?.type == "primary",
      "bg-transparent border border-primary text-primary":
        props.button?.type == "primaryOutlined",
      "bg-secondary text-white hover:bg-white hover:text-secondary hover:border-secondary hover:border":
        props.button?.type == "secondary",
      "bg-white text-primary hover:text-white hover:bg-primary hover:border-[1px] hover:border-white":
        props.button?.type == "white",
      "bg-[#40A2E3] text-white": props.button?.type == "tertiary",
      "bg-gradient-to-r from-[#BDC200] via-[#95C11F] to-[#3AAA35] text-white":
        props.button?.type == "gradient",
      "text-primary text-base hover:scale-105 ": props.button?.type == "text",
      "": props.button?.type == "icon",
      //button border
      "border-[1.5px] text-primary border-primary": props.button?.type == "border",
      "border-[1.5px] text-white ": props.button?.type == "border1",
      //Button Size
      "px-3 py-2": props.button?.size == "sm" && props.button.type != "icon",
      "px-5 py-3 text-base": props.button?.size == "md" && props.button.type != "icon",
      "px-7 py-4 text-lg": props.button?.size == "lg" && props.button.type != "icon",

      //   Button Icon Classes
      "h-8 w-8": props.button?.size == "sm" && props.button.type == "icon",
      "h-11 w-11": props.button?.size == "md" && props.button.type == "icon",
      "h-16 w-16": props.button?.size == "lg" && props.button.type == "icon",

      //   button
      "rounded-sm": props.button?.rounded == "sm",
      "rounded-md": props.button?.rounded == "md",
      "rounded-lg": props.button?.rounded == "lg",
      "rounded-xl": props.button?.rounded == "xl",
      "rounded-full": props.button?.rounded == "full",
    },
  ];
});
</script>

<style scoped></style>
