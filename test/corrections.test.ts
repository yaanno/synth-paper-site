import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, it, expect } from 'vitest';
import Corrections from '../src/components/Corrections.astro';

describe('Corrections.astro', () => {
  it('renders nothing when there are no corrections', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Corrections, {
      props: { corrections: [] },
    });
    expect(html).not.toContain('Corrections');
  });

  it('renders a dated, visible note for each correction', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Corrections, {
      props: {
        corrections: [
          { date: new Date('2026-07-13T12:00:00Z'), note: 'Fixed the benchmark name.' },
        ],
      },
    });
    expect(html).toContain('Corrections');
    expect(html).toContain('July 13, 2026');
    expect(html).toContain('Fixed the benchmark name.');
  });
});
