<script setup lang="ts">
// import {
//   isGreaterThan,
//   isValidEmail,
//   isEmpty,
//   lengthIsGreaterThan,
//   lengthIsSmallerThan,
//   isSmallerThan,
// } from "../../plugin/helper";
import { ref, computed, defineProps } from "vue";
let error = ref("");

const emits = defineEmits(["value", "valid", "update:modelValue"]);
const props = defineProps({
  errors: { type: Object, default: {} },
  min: { type: Number, default: -1 },
  rows: { type: Number, default: 6 },
  max: { type: Number, default: -1 },
  label: { type: String, default: "" },
  placeholder: { type: String, default: "" },
  displayError: { type: Boolean, default: true },
  required: { type: Boolean, default: true },
  type: { type: String, default: "text" },
  modelValue: { type: String, default: "" },
  text: { type: String, default: "" },
});

const validate = (valueInput: any) => {
  if (isEmpty(valueInput) && props.required) {
    error.value = props.label + " cannot be empty";
  } else if (
    props.type == "text" &&
    (!lengthIsGreaterThan(valueInput, props.min) ||
      !lengthIsSmallerThan(valueInput, props.max))
  ) {
    error.value =
      props.label +
      " should be minimum " +
      props.min +
      " and maximum of " +
      props.max +
      " characters";
  } else {
    emits("valid", true);
    error.value = "";
  }
  if (!!error.value) {
    emits("valid", false);
  }
};

const input = computed({
  get() {
    return props.modelValue;
  },

  set(value) {
    emits("update:modelValue", value);

    validate(value);
  },
});
</script>

<template>
  <div class="flex flex-col w-full mx-auto bg-transparent">
    <div class="flex flex-col">
      <label
        for="name"
        class="text-xs font-medium sm:text-sm tracking-wide ml-1 text-label mb-1.5"
        :class="text ? 'text-' + text : ''"
      >
        {{ label }}
      </label>

      <div>
        <textarea
          :rows="rows"
          id="name"
          name="name"
          type="text"
          :placeholder="placeholder"
          v-model.trim="input"
          class="text-black placeholder:text-xs bg-white ring-1 ring-lightGray text-sm sm:text-base p-2 py-2 w-full rounded-lg appearance-none focus:outline-none focus:ring-primaryColor focus:ring-2 transition-all"
        ></textarea>
      </div>

      <p>
        <span
          v-if="displayError"
          class="flex items-center font-medium tracking-wide text-red-500 text-xs min-h-6 max-h-fit ml-1"
          :class="text ? 'text-' + text : ''"
        >
          {{ error }}
        </span>
      </p>
    </div>
  </div>
</template>

<style scoped></style>
