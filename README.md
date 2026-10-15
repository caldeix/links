# Links · Caldeix

![Version](https://img.shields.io/badge/Versión-1.6.0-D4AF37?style=flat-square)
![Copyright](https://img.shields.io/badge/©_2026-Caldeix-D4AF37?style=flat-square)
![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
[![Deploy](https://img.shields.io/github/actions/workflow/status/caldeix/links/deploy.yml?branch=master&label=Deploy&style=flat-square&logo=github)](https://github.com/caldeix/links/actions/workflows/deploy.yml)
![License](https://img.shields.io/badge/Licencia-MIT-green?style=flat-square)

Agregador de enlaces personales estilo Linktree, publicado en **https://caldeix.github.io/links**. Todo sale de un único JSON — sin tocar código para añadir o editar enlaces.

## Features

- **HTML estático con los datos dentro** — `links.json` se lee al compilar, así que la página publicada ya contiene todos los enlaces (sin spinner ni `fetch`). Si el JSON es inválido, el build falla y no se despliega
- **SEO + GEO** — JSON-LD (`ProfilePage` + `Person` + proyectos), Open Graph, [`/links/llms.txt`](https://caldeix.github.io/links/llms.txt) y [`/links/sitemap.xml`](https://caldeix.github.io/links/sitemap.xml), todo generado desde `links.json`
- **GitHub strip en apps** — las tarjetas con campo `github` incluyen un footer con enlace al repositorio (se omite si `github` y `url` son la misma dirección)
- **Favoritos y orden** — `favorite` marca la tarjeta con una estrella dorada y la sube arriba; `order` ordena los favoritos
- **Favicon automático** — si un enlace no tiene `emoji`, se muestra el favicon de la web enlazada (se obtiene al compilar)
- **Filtrado por categoría** — pestañas interactivas con animación gold/violet
- **Accesible** — navegación por teclado con foco visible, `aria-pressed` en pestañas, landmarks y respeto a `prefers-reduced-motion`
- **Diseño dark premium** — paleta `#090A0F` + acentos dorados y violeta, partículas flotantes y shimmer en hover
- **Responsive** — mobile-first, funciona en cualquier pantalla
- **Deploy automático** — cada merge a `master` compila y publica en GitHub Pages

## Personalización

Edita `public/links.json` — sin tocar código:

```json
{
  "profile": {
    "name": "Tu Nombre",
    "description": "Tu descripción",
    "emoji": "/profile-pic.jpg",
    "jobTitle": "Full Stack Developer",
    "alternateName": ["Tu alias"],
    "knowsAbout": ["TypeScript", "Python"]
  },
  "categories": [
    { "id": "todos",  "name": "Todos",    "emoji": "🌟" },
    { "id": "perfil", "name": "Sobre mí", "emoji": "👤" },
    { "id": "apps",   "name": "Apps",     "emoji": "📱" }
  ],
  "links": [
    {
      "emoji": "💼",
      "title": "LinkedIn",
      "description": "Conecta conmigo",
      "url": "https://linkedin.com/in/tu-usuario",
      "category": "perfil",
      "favorite": true,
      "order": 1
    },
    {
      "emoji": "",
      "title": "Mi app",
      "description": "Sin emoji → usa el favicon de la web",
      "url": "https://tu-usuario.github.io/mi-app",
      "category": "apps",
      "github": "https://github.com/tu-usuario/mi-app"
    }
  ]
}
```

### Campos de un enlace

| Campo         | Obligatorio | Descripción |
|---------------|:-----------:|-------------|
| `title`       | ✔ | Título de la tarjeta |
| `description` | ✔ | Texto secundario (admite varias líneas) |
| `url`         | ✔ | Destino del enlace (`https://…` o `mailto:…`) |
| `category`    | ✔ | `id` de una categoría (`todos` muestra todas) |
| `emoji`       |   | Icono de la tarjeta. Si se omite o se deja `""`, se usa el favicon de `url` |
| `github`      |   | URL del repositorio; añade la franja "Ver repositorio en GitHub" |
| `favorite`    |   | `true` para mostrar la estrella dorada |
| `order`       |   | Posición entre los favoritos (menor = antes); los favoritos van siempre primero |

### Campos del perfil

| Campo           | Obligatorio | Descripción |
|-----------------|:-----------:|-------------|
| `name`          | ✔ | Nombre visible (y `name` del JSON-LD) |
| `description`   | ✔ | Frase bajo el nombre |
| `emoji`         | ✔ | Un emoji o la ruta de una imagen de `public/` (p. ej. `/profile-pic.jpg`) |
| `jobTitle`      |   | Rol profesional (metadatos y JSON-LD) |
| `alternateName` |   | Otros nombres con los que te buscan (JSON-LD) |
| `knowsAbout`    |   | Especialidades (JSON-LD, keywords y `llms.txt`) |

Los enlaces de la categoría `perfil` con URL `https://` se publican en el JSON-LD como `sameAs` (tus otros perfiles), y los de `apps` como proyectos.

### Verificación en buscadores (opcional)

Crea en GitHub las variables de Actions `GOOGLE_SITE_VERIFICATION` y/o `BING_SITE_VERIFICATION` (Settings → Secrets and variables → Actions → Variables) con el código que dan Google Search Console / Bing Webmaster. El siguiente deploy añade la meta etiqueta; después envía `https://caldeix.github.io/links/sitemap.xml`.

## Instalación

```bash
git clone https://github.com/caldeix/links.git
cd links
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Script              | Qué hace |
|---------------------|----------|
| `npm run dev`       | Servidor de desarrollo (antes descarga los favicons que falten) |
| `npm run build`     | Export estático en `out/` (antes descarga los favicons) |
| `npm run favicons`  | Descarga los favicons de los enlaces sin emoji a `public/favicons/` |
| `npm run lint`      | ESLint (`eslint .`, config de Next 16) |
| `npm run typecheck` | Comprobación de tipos con `tsc --noEmit` |

## Estructura del proyecto

```
app/                  layout (metadatos), página, llms.txt y sitemap.xml (todo estático)
components/
  categories/         pestañas de categorías
  layout/             contenedor y footer
  links/              explorador (cliente), tarjeta, icono, contador y grid
  profile/            cabecera con foto, nombre y descripción
  ui/                 partículas de fondo
constants/            constantes
hooks/                filtrado y orden por categoría
lib/                  lectura/validación de links.json, JSON-LD y URLs del sitio
scripts/              fetch-favicons.mjs (se ejecuta en build/dev)
types/                tipos de LinksData
public/               links.json, foto de perfil, iconos y manifest
.github/              deploy.yml (GitHub Pages) y dependabot.yml
```

## Deploy

Automático: cada push o merge a `master` lanza el workflow [`deploy.yml`](.github/workflows/deploy.yml), que ejecuta `typecheck`, `lint` y `build` y publica `out/` en GitHub Pages. Si alguna comprobación falla, no se despliega. También se puede lanzar a mano desde la pestaña *Actions* (`workflow_dispatch`).

## Licencia

MIT — ver [LICENSE](LICENSE). © 2026 Caldeix.
