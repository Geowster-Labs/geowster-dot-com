# geowster.com

Source for [geowster.com](https://geowster.com), built with [Astro](https://astro.build), Tailwind CSS v4, and React islands, deployed to GitHub Pages by GitHub Actions.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check + build to dist/
```

- Pages: `src/pages/` (Home, Services, About, 404)
- Services and core values: `src/content/services.json`, `src/content/values.json`
- Site name, nav, and links: `src/consts.ts`
- Theme tokens: `src/styles/global.css`

Every push to `main` deploys via `.github/workflows/deploy.yml`.
