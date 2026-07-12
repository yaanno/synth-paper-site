import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// The `articles` collection is scoped to Markdown only. Sidecar Claim ledgers
// (`<slug>.ledger.json`, ticket 03) live beside each article but are deliberately
// excluded from this glob so they are committed and diffable yet never routed as pages.
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    // Dek / social summary.
    description: z.string(),
    pubDate: z.coerce.date(),
    beat: z.string(),
    // House byline — the single, honest synthetic byline every piece carries (CONTEXT.md).
    // Pinned to a literal for the tracer: no fabricated human-sounding reporters. Per-Beat
    // synthetic Personas (still openly AI) are a later, out-of-scope addition.
    byline: z.literal('The Synthetic Newspaper').default('The Synthetic Newspaper'),
    // Radical transparency — every piece is openly AI-run; the disclosure is never hidden,
    // so this is pinned true and rendered unconditionally.
    aiDisclosure: z.literal(true).default(true),
    // Dated, in-place Correction notes appended when a published piece turns out wrong
    // (CONTEXT.md, ADR-0003). Empty until a correction is issued.
    corrections: z
      .array(
        z.object({
          date: z.coerce.date(),
          note: z.string(),
        }),
      )
      .default([]),
  }),
});

export const collections = { articles };
