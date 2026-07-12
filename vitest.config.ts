/// <reference types="vitest/config" />
import { getViteConfig } from 'astro/config';

// getViteConfig loads the Astro config so tests share the site's settings.
// Astro components must render in a server environment (Astro 6+ Container API rule).
export default getViteConfig({
  test: {
    environment: 'node',
    include: ['test/**/*.test.ts'],
  },
});
