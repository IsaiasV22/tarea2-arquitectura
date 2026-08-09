<script setup>
const route = useRoute()

const { data: article } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})

if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Artículo no encontrado' })
}

const { data: surround } = await useAsyncData(`surround-${route.path}`, () => {
  return queryCollectionItemSurroundings('blog', route.path)
    .where('category', '=', article.value?.category)
    .order('date', 'DESC')
})

useSeoMeta({
  title: article.value.title,
  description: article.value.description
})
</script>

<template>
  <article class="container">
    <NuxtLink :to="`/blog/${article.category}`" class="back-link capitalize">&larr; {{ article.category }}</NuxtLink>
    <h1>{{ article.title }}</h1>
    <p class="meta">{{ new Date(article.date).toLocaleDateString('es-CR', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }) }}</p>

    <ContentRenderer :value="article" />

    <Author :author="article.author" />

    <PrevNext :prev="surround?.[0]" :next="surround?.[1]" />
  </article>
</template>
