import { describe, it, expect } from 'vitest';
import { formatDate } from '../src/utils/date';

describe('formatDate', () => {
  it('renders a UTC date as a long-form English string', () => {
    // Use a midday UTC time so the local-timezone offset can't shift the calendar day.
    expect(formatDate(new Date('2026-07-12T12:00:00Z'))).toBe('July 12, 2026');
  });
});
