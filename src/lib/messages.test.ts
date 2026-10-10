import { describe, expect, it } from 'vitest';
import { formatMessageDate, messageInitial } from './messages';

describe('Community messages', () => {
  it('uses the fan name initial for the card badge', () => {
    expect(messageInitial('alex')).toBe('A');
    expect(messageInitial('  devan')).toBe('D');
  });

  it('formats saved message dates for display', () => {
    expect(formatMessageDate('2026-10-08T21:12:00.000Z')).toContain('2026');
    expect(formatMessageDate('2026-10-08T21:12:00.000Z')).toContain('OCT');
  });
});
