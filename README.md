# Links · Caldeix

![Version](https://img.shields.io/badge/Versión-1.4.0-D4AF37?style=flat-square)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Deploy](https://img.shields.io/badge/Deploy-GitHub_Pages-222?style=flat-square&logo=github&logoColor=white)
![License](https://img.shields.io/badge/Licencia-MIT-green?style=flat-square)

Agregador de enlaces personales estilo Linktree. Los datos se cargan desde un único JSON — sin tocar código para añadir o editar enlaces.

## Features

- **Filtrado por categoría** — pestañas interactivas con animación gold/violet
- **Diseño dark premium** — paleta `#090A0F` + acentos dorados y violeta, partículas flotantes y shimmer en hover
- **Sin hydration mismatch** — posiciones de partículas deterministas (seeded random)
- **Fallback automático** — si `links.json` falla, muestra datos de ejemplo con aviso visual
- **Responsive** — mobile-first, funciona en cualquier pantalla
- **Doble implementación** — `index.html` standalone (zero deps) + app Next.js completa

## Personalización

Edita `public/links.json` — sin tocar código:

```json
{
  "profile": {
    "name": "Tu Nombre",
    "description": "Tu descripción",
    "emoji": "/profile-pic.png"
  },
  "categories": [
    { "id": "todos",  "name": "Todos",  "emoji": "🌟" },
    { "id": "social", "name": "Social", "emoji": "🌐" }
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

## Instalación

```bash
git clone https://github.com/caldeix/links.git
cd links
npm install
npm run dev        # http://localhost:3000
```

## Deploy

```bash
npm run deploy     # build → gh-pages
```

## Licencia

MIT — ver [LICENSE](LICENSE).
