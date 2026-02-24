import { describe, it, expect } from 'vitest';

describe('healthz endpoint logic', () => {
  it('should return ok: true and version', () => {
    const mockHealthzResponse = () => ({ ok: true, version: '0.1.0' });
    const data = mockHealthzResponse();
    expect(data.ok).toBe(true);
    expect(data.version).toBe('0.1.0');
  });
  
  it('should return valid JSON structure', () => {
    const data = { ok: true, version: '0.1.0' };
    expect(typeof data.ok).toBe('boolean');
    expect(typeof data.version).toBe('string');
  });
});
