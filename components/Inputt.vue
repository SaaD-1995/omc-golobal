<template>
  <div>
    <input
      autocomplete="off"
      :class="!!error ? 'outline outline-red-600' : 'outline'"
      :type="type"
      v-model="input"
      class="w-full py-2"
    />
    <p class="text-red-700">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  type: { type: String, default: "text" },
  placeholder: { type: String, default: "text" },
  label: { type: String, default: "text" },
  modelValue: { type: String, default: "" },
  rules: { type: Array, default: [] },
});
const emits = defineEmits(["update:modelValue", "valid"]);
const input: any = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits("update:modelValue", value);
  },
});

const error = computed(() => {
  let msg = "";
  props.rules?.forEach((rule: any) => {
    console.log("rule", rule(props.modelValue));
    if (rule(props.modelValue) != true) {
      msg = rule(props.modelValue);
      console.log("in");
    }
  });
  console.log("msg", msg);
  emits("valid", !!!msg);
  return msg;
});
</script>

<style scoped></style>
