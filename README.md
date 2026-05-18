# Links · Caldeix

[![Autor](https://img.shields.io/badge/Autor-caldeix-blue)](https://github.com/caldeix)
[![Versión](https://img.shields.io/badge/Versión-1.4.0-brightgreen)](https://github.com/caldeix/links/releases)
[![Última Actualización](https://img.shields.io/badge/Última%20Actualización-mayo%202026-orange)](https://github.com/caldeix/links/commits/main)
[![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-blue)](https://caldeix.github.io/links/)

## Descripción

Agregador de enlaces personales estilo Linktree. Construido con **Next.js 15** y **Tailwind CSS**, con exportación estática para GitHub Pages. Los datos se cargan desde un JSON externo para que añadir o editar enlaces sea trivial sin tocar código.

## Características

- **Filtrado por categoría** — pestañas interactivas con animación gold/violet
- **Diseño premium dark** — paleta oscura profunda con acentos dorados y violeta, partículas flotantes y efecto shimmer en hover
- **Sin hydration mismatch** — posiciones de partículas deterministas (seeded random)
- **Fallback automático** — si `links.json` falla, muestra datos de ejemplo con aviso visual
- **Responsive** — diseñado mobile-first, funciona en cualquier pantalla
- **Doble implementación** — `index.html` standalone (sin dependencias) + app Next.js completa

## Tecnologías

| Capa | Tecnología |
|---|---|
| Framework | Next.js 15 (static export) |
| Estilos | Tailwind CSS 3 + CSS custom properties |
| Iconos | Lucide React |
| Deploy | GitHub Pages (`gh-pages`) |

## Personalización rápida

Edita `public/links.json` — sin tocar código:

```json
{
  "profile": {
    "name": "Tu Nombre",
    "description": "Tu descripción",
    "emoji": "/profile-pic.png"
  },
  "categories": [
    { "id": "todos",   "name": "Todos",   "emoji": "🌟" },
    { "id": "social",  "name": "Social",  "emoji": "🌐" }
  ],
  "links": [
    {
      "emoji": "💼",
      "title": "LinkedIn",
      "description": "Conecta conmigo",
      "url": "https://linkedin.com/in/tu-usuario",
      "category": "social"
    }
  ]
}
```

## Desarrollo local

```bash
npm install
npm run dev        # http://localhost:3000
```

## Deploy

```bash
npm run deploy     # build + push a gh-pages
```

## Paleta de diseño

| Variable | Valor | Uso |
|---|---|---|
| `--bg` | `#090A0F` | Fondo principal |
| `--card` | `#16192B` | Tarjetas |
| `--primary` | `#D4AF37` | Acento gold — CTAs |
| `--secondary` | `#8A2BE2` | Acento violet |
| `--text-muted` | `#A0AEC0` | Texto secundario |

## Licencia

MIT — ver [LICENSE](LICENSE) para más detalles.
