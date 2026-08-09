<script setup>
defineProps({
  author: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="author">
    <div class="author-photo">
      <img :src="author.image" :alt="author.name" />
      <p class="author-credit">Fotografía: cortesía de La Nación</p>
    </div>
    <div>
      <h4>Autor</h4>
      <p class="author-name">{{ author.name }}</p>
      <p class="author-bio">{{ author.bio }}</p>
    </div>
  </div>
</template>
