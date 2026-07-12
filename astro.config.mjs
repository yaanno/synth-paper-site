// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages project site: https://yaanno.github.io/synth-paper/
// `base` must match the repository name so asset/links resolve under the sub-path.
export default defineConfig({
  site: 'https://yaanno.github.io',
  base: '/synth-paper',
  markdown: {
    // GFM (incl. footnote citations, per ticket 03) is Astro's default; pinned here
    // so the reader-facing `[^s1]` citation rendering never silently regresses.
    gfm: true,
  },
});
