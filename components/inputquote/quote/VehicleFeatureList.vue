<script setup lang="ts">
const emits = defineEmits(["features", "update:modelValue"]);
import { CheckIcon } from '@heroicons/vue/20/solid'

const props = defineProps({
  modelValue: { type: Array, default: [] },
});
const features = useFeatureList()

const selected: any = ref([]);
function addFeature(id: any) {
  let item = [];
  item = selected.value.filter((fId: any) => {
    return fId.id == id;
  });

  if (item.length > 0) {
    item = selected.value.filter((fId: any, i: Number) => {
      if (fId.id == id) {
        selected.value.splice(i, 1);
      }
    });
  } else selected.value.push({ id: id });
  emits("update:modelValue", selected.value);
}

watch(
  () => {
    props.modelValue;
  },
  (newValue: any, oldValue) => {
    if (newValue?.length) {
      newValue.forEach((element: any) => {
        selected.value.push(element);
      });
    }
  },
  { deep: true, immediate: true }
);
function selectedIncludes(item: any) {
  if (!selected.value.length) return false;

  let contain = selected.value.find((element: any) => {
    return element.id == item;
  });
  if (!!contain) {
    return true;
  }
}
onMounted(() => {
  if (props.modelValue?.length) {
    props.modelValue.forEach((element: any) => {
      selected.value.push(element);
    });
  }
});
</script>
<template>
  <div>
    <label class="text-xs sm:text-sm font-medium text-label">Features</label>
    <section class="flex flex-wrap gap-5 mt-1">
      <article
        v-for="(feature, i) of features"
        :key="i"
        @click="addFeature(feature.id)"
        :class="selectedIncludes(feature.id) ? 'bg-[#FEDFE3]' : 'bg-white'"
        class="border border-lightGray cursor-pointer px-4 text-sm py-1 rounded-md"
      >
        <div class="flex gap-2 items-center">
          <!-- <span
            :class="
              selected.includes(feature.value) ? 'bg-white' : 'bg-lightGray'
            "
            class="h-4 w-4 rounded-sm"
          ></span> -->

          <img :src="feature.icon" class="h-4 w-4 text-primaryColor" />
          <p class="font-medium">{{ feature.name }}</p>
        </div>
      </article>
    </section>
  </div>
</template>
<style scoped></style>
