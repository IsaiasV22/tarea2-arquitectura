# Tarea 2 — Blog de noticias con Nuxt Content

**Estudiante:** Isaías Víquez Soto

**URL de publicación en Netlify:** [tarea2-arqui-isaiasviquez.netlify.app](https://tarea2-arqui-isaiasviquez.netlify.app)

## Descripción

Blog de noticias nacionales construido con Nuxt 4 y `@nuxt/content`, con 9 entradas distribuidas en tres categorías (sucesos, deportes, espectáculos), listado por categoría, navegación anterior/siguiente restringida a la categoría, y búsqueda de texto completo sobre todo el blog.

Las noticias están basadas en publicaciones reales de La Nación (nacion.com) (ver `docs/referencias.md`), redactadas de forma original para este proyecto y citando la fuente al final de cada artículo. Las fotografías de los autores provienen de sus páginas oficiales en La Nación, con crédito visible en cada artículo.

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

## Repositorio y despliegue

- **GitHub:** `origin` apunta a `https://github.com/IsaiasV22/tarea2-arquitectura.git`.
- **Netlify:** el sitio está conectado a la rama `main` (branch to deploy) con **build command** `npm run build`, publicando vía el preset autodetectado de Nuxt/Nitro. Cada push a `main` dispara un nuevo deploy automáticamente.

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
