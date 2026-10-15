# Links · Caldeix

![Version](https://img.shields.io/badge/Versión-1.6.0-D4AF37?style=flat-square)
![Copyright](https://img.shields.io/badge/©_2026-Caldeix-D4AF37?style=flat-square)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
[![Deploy](https://img.shields.io/github/actions/workflow/status/caldeix/links/deploy.yml?branch=master&label=Deploy&style=flat-square&logo=github)](https://github.com/caldeix/links/actions/workflows/deploy.yml)
![License](https://img.shields.io/badge/Licencia-MIT-green?style=flat-square)

Agregador de enlaces personales estilo Linktree, publicado en **https://caldeix.github.io/links**. Los datos se cargan desde un único JSON — sin tocar código para añadir o editar enlaces.

## Features

- **GitHub strip en apps** — las tarjetas con campo `github` incluyen un footer con enlace directo al repositorio
- **Favoritos y orden** — `favorite` marca la tarjeta con una estrella dorada; `order` fija su posición
- **Favicon automático** — si un enlace no tiene `emoji`, se muestra el favicon de la web enlazada (se obtiene al compilar)
- **Filtrado por categoría** — pestañas interactivas con animación gold/violet
- **Diseño dark premium** — paleta `#090A0F` + acentos dorados y violeta, partículas flotantes y shimmer en hover
- **Fallback automático** — si `links.json` falla, muestra datos de ejemplo con aviso visual
- **Responsive** — mobile-first, funciona en cualquier pantalla
- **Deploy automático** — cada merge a `master` compila y publica en GitHub Pages

## Personalización

Edita `public/links.json` — sin tocar código:

```json
{
  "profile": {
    "name": "Tu Nombre",
    "description": "Tu descripción",
    "emoji": "/profile-pic.jpg"
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
| `order`       |   | Posición en la lista (menor = antes) |

`profile.emoji` admite un emoji o la ruta de una imagen de `public/` (p. ej. `/profile-pic.jpg`).

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
| `npm run lint`      | ESLint (`next lint`) |
| `npm run typecheck` | Comprobación de tipos con `tsc --noEmit` |

## Estructura del proyecto

```
app/                  layout (metadatos) y página principal
components/
  categories/         pestañas de categorías
  layout/             contenedor y footer
  links/              tarjeta, icono, contador y grid de enlaces
  profile/            cabecera con foto, nombre y descripción
  ui/                 spinner, aviso de fallback y partículas
constants/            datos de fallback y constantes
hooks/                carga de datos y filtrado por categoría
scripts/              fetch-favicons.mjs (se ejecuta en build/dev)
types/                tipos de LinksData
public/               links.json, foto de perfil, iconos y manifest
.github/workflows/    deploy.yml (GitHub Pages)
```

## Deploy

Automático: cada push o merge a `master` lanza el workflow [`deploy.yml`](.github/workflows/deploy.yml), que ejecuta `typecheck`, `lint` y `build` y publica `out/` en GitHub Pages. Si alguna comprobación falla, no se despliega. También se puede lanzar a mano desde la pestaña *Actions* (`workflow_dispatch`).

## Licencia

MIT — ver [LICENSE](LICENSE). © 2026 Caldeix.
