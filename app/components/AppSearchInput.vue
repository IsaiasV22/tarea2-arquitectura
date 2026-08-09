<script setup>
const searchQuery = ref('')

const { data: sections } = await useAsyncData('search-sections', () => {
  return queryCollectionSearchSections('blog')
})

const results = computed(() => {
  if (!searchQuery.value) return []
  const q = searchQuery.value.toLowerCase()
  return (sections.value || [])
    .filter(section =>
      section.title?.toLowerCase().includes(q) ||
      section.content?.toLowerCase().includes(q)
    )
    .slice(0, 8)
})
</script>

<template>
  <div class="search">
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Buscar en todas las noticias..."
    />
    <ul v-if="results.length" class="search-results">
      <li v-for="result in results" :key="result.id">
        <NuxtLink :to="result.path">{{ result.title }}</NuxtLink>
      </li>
    </ul>
    <p v-else-if="searchQuery" class="search-empty">Sin resultados para "{{ searchQuery }}"</p>
  </div>
</template>
