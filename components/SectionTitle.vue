<template>
  <div class="section-top">
    <h2 class="section-title">{{ title }}</h2>
    <p v-if="description" class="section-description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: ['title', 'description'],
}
</script>

<style></style>
