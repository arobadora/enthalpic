# Enthalpic — enthalpic.de

Landing page for **Enthalpic**, a climate/deep-tech startup building sensing and intelligence infrastructure for high-integrity marine carbon removal and blue carbon markets.

Designed for the **Tomorrow Accelerator** application. Premium, scientific, investor-facing one-pager with a dark oceanic theme.

## Tech stack

- Plain HTML, CSS, JavaScript (no build step required)
- [Inter](https://fonts.google.com/specimen/Inter) typeface via Google Fonts
- Deploys as static site to Vercel or Netlify

## Local development

```bash
# Serve locally with any static server
npx serve .

# Or with Python
python3 -m http.server 8000

# Or with Node
npx http-server .
```

Open `http://localhost:3000` (or whichever port your server uses).

## Project structure

```
.
├── index.html        # Main landing page
├── styles.css        # All styles (dark oceanic theme)
├── script.js         # Interactions, scroll animations, nav
├── public/
│   └── favicon.svg   # SVG favicon
├── netlify.toml      # Netlify deployment config
├── vercel.json       # Vercel deployment config
├── robots.txt        # Search engine directives
├── sitemap.xml       # XML sitemap
├── package.json      # Minimal package file
└── README.md
```

## Deploy to Vercel

1. Push this repo to GitHub/GitLab
2. Go to [vercel.com](https://vercel.com) → Import repository
3. Vercel auto-detects the static site (no build command needed)
4. Set the domain to `enthalpic.de` in Vercel > Project > Domains
5. Deploy

Or use the Vercel CLI:

```bash
npx vercel deploy --prod
```

## Deploy to Netlify

1. Push this repo to GitHub/GitLab
2. Go to [netlify.com](https://netlify.com) → Import repository
3. Set:
   - **Build command**: leave empty
   - **Publish directory**: `.`
4. Set the domain to `enthalpic.de` in Netlify > Domain settings
5. Deploy

Or use the Netlify CLI:

```bash
npx netlify deploy --prod --dir=.
```

## Domain

The canonical domain is **enthalpic.de**. Both Vercel and Netlify support custom domain configuration in their dashboard.

## Customisation

- Edit `index.html` for all page content
- Edit `styles.css` for colours, spacing, typography
- Colour variables and gradient values are at the top of the CSS

## License

Proprietary — Enthalpic UG.
