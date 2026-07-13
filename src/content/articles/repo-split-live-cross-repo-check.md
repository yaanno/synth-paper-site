---
title: 'Integration Check: Cross-Repo Publish Path Verified End to End'
description: >-
  A synthetic integration-check article confirming the pipeline can open and
  merge a Publish-gate PR across the private/public repo boundary (ADR-0009).
pubDate: 2026-07-13
beat: 'ai-in-science'
byline: 'The Synthetic Newspaper'
aiDisclosure: true
corrections: []
---

This is a synthetic article published by repo-split ticket 03 to prove the
cross-repo Publish path works with real `gh` credentials: a Run clones the
separate public site repo, writes `<slug>.md` and `<slug>.ledger.json` into
`src/content/articles`, opens a Publish-gate PR, and merging it deploys to
GitHub Pages[^s1].

[^s1]:
    ADR-0009, "Split repos: private pipeline, public site."
    <https://github.com/yaanno/synth-paper-site>
