<script setup>
const route = useRoute()

const { data: posts } = await useAsyncData(`categoria-${route.params.categoria}`, () => {
  return queryCollection('blog')
    .where('category', '=', route.params.categoria)
    .order('date', 'DESC')
    .select('path', 'title', 'description', 'date', 'author')
    .all()
})

if (!posts.value || posts.value.length === 0) {
  throw createError({ statusCode: 404, statusMessage: 'Categoría no encontrada' })
}

useSeoMeta({
  title: route.params.categoria
})
</script>

<template>
  <div class="container">
    <NuxtLink to="/blog" class="back-link">&larr; Volver al blog</NuxtLink>
    <h1 class="capitalize">{{ route.params.categoria }}</h1>
    <ul class="post-list">
      <li v-for="post in posts" :key="post.path">
        <NuxtLink :to="post.path">
          <h2>{{ post.title }}</h2>
          <p>{{ post.description }}</p>
          <p class="meta">{{ post.author.name }} &middot; {{ new Date(post.date).toLocaleDateString('es-CR', { timeZone: 'UTC' }) }}</p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
