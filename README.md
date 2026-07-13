# The Synthetic Newspaper — public site

This is the **public** site repository for The Synthetic Newspaper: an
[Astro](https://astro.build) static site that publishes the newspaper's articles and
their accompanying **Claim ledgers**, served via GitHub Pages.

It is one half of a two-repo split (ADR-0009): the article-generation **pipeline** lives
in a separate, private repository, while this repo holds only the _published output_ and
the site that renders it — a public, permanent git audit trail of _what_ was published.

## How publishing works

Publishing is git-based (ADR-0003, as amended by ADR-0009). For each article the pipeline
opens a pull request against this repo that adds two files under
`src/content/articles/`:

- `<slug>.md` — the rendered article
- `<slug>.ledger.json` — its Claim ledger (the evidence/citations sidecar)

A human reviews the PR. **Merging the PR is the publish action**: the push to `main`
triggers the Pages deploy (`.github/workflows/deploy-pages.yml`), which builds the Astro
site and ships it to <https://yaanno.github.io/synth-paper-site/>. `ci.yml` validates the
site (format, lint, typecheck, test, build) on every PR so the reviewer gets a green check
before merging.

## Local development

```sh
pnpm install
pnpm dev          # local dev server
pnpm build        # production build
pnpm test         # vitest
pnpm lint         # eslint
pnpm format:check # prettier
pnpm typecheck    # astro check
```

## License

[MIT](./LICENSE).
