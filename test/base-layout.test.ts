import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, it, expect } from 'vitest';
import BaseLayout from '../src/layouts/BaseLayout.astro';

describe('BaseLayout.astro', () => {
  it('always shows the Radical transparency AI-run disclosure in the masthead', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(BaseLayout, {
      props: { title: 'Test' },
      slots: { default: '<p>body</p>' },
    });
    expect(html).toContain('openly AI-run');
    expect(html).toContain('The Synthetic Newspaper');
  });
});
