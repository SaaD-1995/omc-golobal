<template>
  <div>
    <!-- Other content -->
    <CardSlider :cards="cards" :itemsPerPage="3">
      <template #default="{ card }">
        <!-- Custom Card Content -->
        <div class="custom-card-content">
          {{ card.content }}
        </div>
      </template>
    </CardSlider>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  components: {
    CardSlider,
  },
  data() {
    return {
      cards: [
        { content: "Card 1 Content" },
        { content: "Card 2 Content" },
        { content: "Card 3 Content" },
        // Add more cards as needed
      ],
    };
  },
});
</script>
