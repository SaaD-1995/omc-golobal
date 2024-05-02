<script setup lang="ts">
const emits = defineEmits(["update:modelValue"]);
const input = computed({
  get() {
    console.log("has timer true", props.modelValue);
    return props.modelValue;
  },
  set(value) {
    emits("update:modelValue", value);
  },
});
const props = defineProps({
  label: { type: String, default: "" },
  modelValue: { type: Boolean, default: true },
  font: { type: String, default: "medium" },
  textSize: { type: String, default: "sm" },
});
</script>

<template>
  <section class="flex items-center gap-2">
    <label
      class="font-sans capitalize text-black"
      :class="[
        props.font ? `font-${props.font}` : 'font-medium',
        props.textSize ? `text-${props.textSize}` : 'text-sm',
      ]"
    >
      {{ label }}
    </label>
    <label class="switch">
      <input type="checkbox" v-model="input" />
      <span class="slider round"></span>
    </label>
  </section>
</template>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 22px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 15px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #000b40;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(15px);
  -ms-transform: translateX(15px);
  transform: translateX(15px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
