<script setup lang="ts">
import { ref } from "vue";
import { EnvelopeIcon, EyeIcon, PencilIcon } from "@heroicons/vue/24/solid";
import { EyeSlashIcon } from "@heroicons/vue/24/solid";

import {
  isGreaterThan,
  isValidEmail,
  isEmpty,
  lengthIsGreaterThan,
  lengthIsSmallerThan,
  isSmallerThan,
} from "../../plugins/helpers";
let error = ref("");
let eye = ref(true);

const emits = defineEmits(["value", "valid", "update:modelValue"]);

const props = defineProps({
  modelValue: { type: String, default: "" },
  min: { type: Number, default: 0 },
  max: { type: Number, default: 0 },
  label: { type: String, default: "" },
  placeholder: { type: String, default: "" },
  required: { type: Boolean, default: true },
  type: { type: String, default: "text" },
  text: { type: String, default: "" },
  displayError: { type: Boolean, default: true },
  disabled: { type: Boolean, default: false },
  dense: { type: Boolean, default: false },
  denser: { type: Boolean, default: false },
  iconRight: { type: Boolean, default: false },
  icon: { type: Object, default: null },
  borderColor: { type: String, default: "primaryColor" },
  bgColor: { type: String, default: "white" },
  labelColor: { type: String, default: "text-label" },
  labelSize: { type: String, default: "base" },
  labelIcon: { type: Object, default: null },
  tooltip: { type: Object, default: { heading: "", content: "" } },
});

const validate = (valueInput: any) => {
  if (isEmpty(valueInput) && props.required == true) {
    error.value = `${props.label} cannot be empty`;
  } else if (props.type == "email" && !isValidEmail(valueInput)) {
    {
      error.value = `${props.label} is not valid`;
    }
  } else if (
    props.type == "number" &&
    (!isGreaterThan(valueInput, props.min) ||
      !isSmallerThan(valueInput, props.max))
  ) {
    error.value = `${props.label}  should be of minimum ${props.min} and maximum ${props.max}`;
  } else if (
    (props.type == "password" || props.type == "text") &&
    (!lengthIsGreaterThan(valueInput, props.min) ||
      !lengthIsSmallerThan(valueInput, props.max))
  ) {
    error.value = `${props.label}   should be of minimum ${props.min} and maximum ${props.max}`;
  } else {
    emits("valid", true);
    error.value = "";
  }
  if (!!error.value) {
    emits("valid", false);
  }
};

const eyeFunc = () => {
  eye.value = !eye.value;
  props.type == "password";
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
const classes = computed(() => {
  return [
    props.icon && !!!props.iconRight ? "pl-10" : "",
    props.icon && !!props.iconRight ? "pr-10 ml-2" : "",
    props.dense ? "py-[6px]" : "h-11",
    props.bgColor ? `bg-${props.bgColor}` : "",
    props.borderColor ? `ring-1 ring-${props.borderColor}` : "",
    props.disabled ? "cursor-not-allowed" : "",
    !!error.value && !!props.displayError
      ? "ring-1 ring-error"
      : ` focus:ring-2 focus:ring-primaryColor`,
  ];
});
</script>

<template>
  <div class="flex flex-col">
    <article class="flex gap-2">
      <label
        class="text-xs font-normal tracking-wide sm:text-sm"
        :class="[
          text ? `text-${text}` : '',
          labelSize ? `text-${labelSize}` : '',
          props.labelColor ? props.labelColor : 'text-label',
        ]"
      >
        {{ label }}
      </label>
      <Tooltip
        v-if="labelIcon"
        :content="props.tooltip.content"
        :heading="props.tooltip.heading"
      >
        <component class="w-5 h-5" classpoint :is="labelIcon" />
      </Tooltip>
    </article>

    <article>
      <div class="relative mt-2 rounded-md">
        <div
          v-if="icon"
          :class="iconRight ? 'right-0' : 'left-0'"
          class="absolute inset-y-0 flex items-center pl-3 pointer-events-none"
        >
          <component
            :is="icon"
            class="w-5 h-5 text-grayIcons"
            aria-hidden="true"
          />
        </div>
        <input
          autocomplete="off"
          :disabled="disabled"
          id="name"
          name="name"
          :type="eye ? type : 'text'"
          :placeholder="placeholder"
          v-model.trim="input"
          :class="classes"
          class="w-full p-3 transition-all rounded-md appearance-none ring-lightGray focus:outline-none"
        />
      </div>

      <section
        class="flex justify-end mr-3 -mt-8"
        v-if="type == 'password'"
        @click="eyeFunc"
      >
        <EyeIcon v-if="!!eye" class="w-6 h-6 cursor-pointer text-lightGray" />
        <EyeSlashIcon
          v-if="!eye"
          class="w-6 h-6 cursor-pointer text-lightGray"
        />
      </section>
    </article>

    <p :class="type == 'password' ? 'mt-2' : null">
      <span
        v-if="displayError"
        class="flex items-center h-5 ml-1 text-xs font-medium tracking-tight text-error"
        :class="text ? 'text-' + text : ''"
      >
        {{ error }}
      </span>
    </p>
  </div>
</template>

<style scoped></style>
