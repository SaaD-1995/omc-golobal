<script setup lang="ts">
// import { isEmpty } from "~~/plugins/helpers";
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";

const props = defineProps({
  data: { type: Array as PropType<any>, defalt: [] },
  label: { type: String, default: "" },
  require: { type: Boolean, default: true },
  modelValue: { type: String, default: null },
  icon: { type: Boolean, default: false },
  labelIcon: { type: Object, default: null },
  tooltip: { type: Object, default: { heading: "", content: "" } },
});

const emits = defineEmits(["value", "valid", "update:modelValue"]);

const input = computed({
  get() {
    let item = props.data?.find((element: any) => {
      return element.value == props.modelValue;
    });
    return item?.label;
  },
  set(value) {
    emits("update:modelValue", value);

    validate(value);
  },
});

const error = ref("");

const isEmpty = (value: any) => {
    if (!value) return true;
    else return false;
  };

const validate = (value: any) => {
  if (props.require == true && isEmpty(value)) {
    error.value = "Please Select an option";
    emits("value", value);
    emits("valid", false);
  } else {
    error.value = "";
    emits("value", value);
    emits("valid", true);
  }
};
</script>

<template>
  <div class="w-full">
    <Listbox class="w-full" as="div" v-model="input">
      <div class="flex gap-2">
        <ListboxLabel class="block text-xs sm:text-sm pb-1.5 font-medium text-label">{{ label }}</ListboxLabel>
        <Tooltip v-if="labelIcon" :placement="'right'" :content="props.tooltip.content" :heading="props.tooltip.heading">
          <component class="h-5 w-5" classpoint :is="labelIcon" />
        </Tooltip>
      </div>
      <div class="relative">
        <ListboxButton
          class="relative w-full cursor-default rounded-md bg-white h-11 pl-3 pr-10 text-left text-gray shadow-sm ring-1 ring-lightGray focus:outline-none focus:ring-2 focus:ring-primaryColor sm:text-sm sm:leading-6">
          <span class="block truncate text-gray text-sm">{{ input }}</span>
          <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon class="h-5 w-5 text-gray" aria-hidden="true" />
          </span>
        </ListboxButton>

        <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100"
          leave-to-class="opacity-0">
          <ListboxOptions
            class="absolute z-10 mt-1 max-h-64 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-lightGray ring-opacity-5 focus:outline-none sm:text-sm">
            <ListboxOption as="template" v-for="(item, i) in data" :key="i" :value="item.value"
              v-slot="{ active, input }">
              <li :class="[
                active ? 'bg-primaryColor text-white' : '',
                'relative cursor-default select-none py-2 pl-3 pr-9',
              ]">
                <span :class="[
                  input ? 'font-semibold' : 'font-normal',
                  'block truncate',
                ]">{{ item.label }}</span>

                <span v-if="input" :class="[
                  active ? 'text-gray' : 'text-primaryColor',
                  'absolute inset-y-0 right-0 flex items-center pr-4',
                ]">
                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>

<style scoped></style>
