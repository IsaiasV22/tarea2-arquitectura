<script setup>
useSeoMeta({
  title: 'Inicio',
  description: 'Blog de noticias nacionales: sucesos, deportes y espectáculos'
})
</script>

<template>
  <div class="container">
    <h1>Blog de noticias</h1>
    <p class="lead">Cobertura nacional en tres secciones: sucesos, deportes y espectáculos.</p>

    <AppSearchInput />

    <ul class="category-list">
      <li><NuxtLink to="/blog/sucesos">Sucesos</NuxtLink></li>
      <li><NuxtLink to="/blog/deportes">Deportes</NuxtLink></li>
      <li><NuxtLink to="/blog/espectaculos">Espectáculos</NuxtLink></li>
    </ul>
  </div>
</template>
