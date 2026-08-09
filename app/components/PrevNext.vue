<script setup>
defineProps({
  prev: { type: Object, default: null },
  next: { type: Object, default: null }
})
</script>

<template>
  <nav class="prev-next">
    <NuxtLink v-if="prev" :to="prev.path" class="button">&larr; {{ prev.title }}</NuxtLink>
    <span v-else />
    <NuxtLink v-if="next" :to="next.path" class="button">{{ next.title }} &rarr;</NuxtLink>
    <span v-else />
  </nav>
</template>
