<script setup lang="ts">
import { useSnackbar } from "~~/composables/response";
import { ArrowRightIcon, InformationCircleIcon } from "@heroicons/vue/24/solid";
import { ExclamationCircleIcon } from "@heroicons/vue/24/solid";
import { CheckBadgeIcon } from "@heroicons/vue/24/solid";
import { ExclamationTriangleIcon } from "@heroicons/vue/24/solid";

const snackbar = useSnackbar();
const show = computed(() => {
  return snackbar.value?.show ?? false;
});

const type = computed(() => {
  return snackbar.value?.type ?? "info";
});

const heading = computed(() => {
  return snackbar.value?.heading ?? "";
});

const body = computed(() => {
  return snackbar.value?.body ?? "";
});

const button = computed(() => {
  return snackbar.value?.button ?? "";
});
const routeTo = computed(() => {
  return snackbar.value?.routeTo ?? "";
});

const bgColor = computed(() => {
  if (type.value == "info") {
    return "bg-info";
  } else if (type.value == "success") {
    return "bg-[#F6FEF9]";
  } else if (type.value == "error") {
    return "bg-[#FFFBFA]";
  } else if (type.value == "warning") {
    return "bg-[#FFFCF5]";
  }
});
const borderColor = computed(() => {
  if (type.value == "info") {
    return "border border-info";
  } else if (type.value == "success") {
    return "border border-[#6CE9A6]";
  } else if (type.value == "error") {
    return "border border-[#FDA29B]";
  } else if (type.value == "warning") {
    return "border border-warning";
  }
});
const headingBgColor = computed(() => {
  if (type.value == "info") {
    return "bg-info";
  } else if (type.value == "success") {
    return "bg-[#ECFDF3]";
  } else if (type.value == "error") {
    return "bg-[#FEF3F2]";
  } else if (type.value == "warning") {
    return "bg-[#FFFAEB]";
  }
});
const textColor = computed(() => {
  if (type.value == "info") {
    return "text-info";
  } else if (type.value == "success") {
    return "text-[#027A48]";
  } else if (type.value == "error") {
    return "text-[#B42318]";
  } else if (type.value == "warning") {
    return "text-[#B54708]";
  }
});
const chipBgColor = computed(() => {
  if (type.value == "info") {
    return "bg-info";
  } else if (type.value == "success") {
    return "bg-[#039753]";
  } else if (type.value == "error") {
    return "bg-[#D92D20]";
  } else if (type.value == "warning") {
    return "bg-[#DC6803]";
  }
});
// const bgColor = "bg-primary1";
</script>

<template>
  <div v-if="show">
    <div
      :class="[bgColor, borderColor]"
      class="py-4 px-3 fixed bottom-5 z-50 right-5 rounded-xl"
    >
      <p
        class="text-sm py-2 px-3 rounded-full font-medium"
        :class="[headingBgColor, textColor]"
      >
        <span
          class="capitalize py-1 px-2 text-white rounded-full"
          :class="chipBgColor"
          >{{ type }}</span
        >
        {{ heading }}
      </p>
      <p v-if="!!body" class="mt-2" :class="textColor">{{ body }}</p>
      <div
        @click="navigateTo(routeTo)"
        v-if="!!button"
        class="flex gap-2 justify-start items-center"
        :class="textColor"
      >
        <p class="font-medium">{{ button }}</p>
        <ArrowRightIcon class="w-5 h-5" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.error {
  background-color: red;
}
.success {
  background-color: green;
}
</style>
~/composable/response