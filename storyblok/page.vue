<template>
  <div>
    <div v-editable="blok">
      <StoryblokComponent
        v-for="blok in props.blok.body"
        :key="blok._uid"
        :blok="blok"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  blok: { type: Object, default: null },
});
</script>

<style scoped></style>
