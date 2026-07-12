// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages project site: https://yaanno.github.io/synth-paper/
// `base` must match the repository name so asset/links resolve under the sub-path.
//
// Markdown is rendered by Astro's default Sätteri pipeline, which applies
// GitHub-Flavored Markdown — including the footnote citations (`[^s1]`, ticket 03) —
// out of the box, so no extra Markdown configuration is required.
export default defineConfig({
  site: 'https://yaanno.github.io',
  base: '/synth-paper',
});
