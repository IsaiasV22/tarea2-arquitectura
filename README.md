# Tarea 2 — Blog de noticias con Nuxt Content

**Estudiante:** Isaías Víquez

**URL de publicación en Netlify:** _pendiente — completar después de desplegar (ver instrucciones abajo)_

## Descripción

Blog de noticias nacionales construido con Nuxt 4 y `@nuxt/content`, con 9 entradas distribuidas en tres categorías (sucesos, deportes, espectáculos), listado por categoría, navegación anterior/siguiente restringida a la categoría, y búsqueda de texto completo sobre todo el blog.

Las noticias están basadas en publicaciones reales de Teletica.com (ver `docs/referencias.md`), redactadas de forma original para este proyecto y citando la fuente al final de cada artículo.

## Requisitos

- Node.js 18 o superior
- npm

## Desarrollo local

```bash
npm install
npm run dev
```

El sitio queda disponible en `http://localhost:3000` (la raíz `/` redirige a `/blog`).

## Build de producción

```bash
npm run build
```

## Cómo terminar de subir el proyecto a GitHub

Este repositorio ya tiene configurado el remoto `origin` (`https://github.com/IsaiasV22/tarea2-arquitectura.git`), pero todavía no tiene commits. Para subir el proyecto:

```bash
git add .
git commit -m "Tarea 2: blog de noticias con Nuxt Content"
git push -u origin main
```

## Cómo publicar en Netlify

1. Entrar a [Netlify](https://app.netlify.com/) e iniciar sesión.
2. **Add new site → Import an existing project**.
3. Conectar la cuenta de GitHub y seleccionar el repositorio `tarea2-arquitectura`.
4. Configurar el build:
   - **Branch to deploy:** `main`
   - **Build command:** `npm run build`
   - **Publish directory:** dejar que Netlify autodetecte el preset de Nuxt/Nitro (recomendado), o usar `dist` si se prefiere forzar un sitio estático agregando `nitro: { preset: 'netlify-static' }` en `nuxt.config.ts`.
5. Deploy site. Netlify asignará una URL del tipo `https://<nombre-del-sitio>.netlify.app`.
6. Copiar esa URL y pegarla en la parte superior de este README, en el campo **URL de publicación en Netlify**. Luego:
   ```bash
   git add README.md
   git commit -m "Agregar URL de Netlify"
   git push
   ```

## Estructura del proyecto

```
content/blog/{sucesos,deportes,espectaculos}/   → 9 artículos en Markdown (3 por categoría)
content.config.ts                                → definición de la colección "blog" y su schema
app/pages/blog/index.vue                         → página principal del blog (enlaces + búsqueda)
app/pages/blog/[categoria]/index.vue             → listado filtrado por categoría
app/pages/blog/[...slug].vue                     → detalle de artículo (anterior/siguiente + autor)
app/components/                                  → Author.vue, PrevNext.vue, AppSearchInput.vue
app/assets/css/blog.css                          → hoja de estilos del blog
```

## Nota sobre la entrega en el Aula Virtual

Al armar el archivo `.zip` para la entrega, **no incluir la carpeta `node_modules`** ni la carpeta `.output` (se generan con `npm install` y `npm run build` respectivamente).
