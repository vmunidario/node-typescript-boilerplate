import { alive, ready } from '../src/apis/health';

describe('Health APIs', () => {
  it('should have message - alive', async () => {
    await expect(alive()).resolves.toHaveProperty('message');
  });
  it('should have message - ready', async () => {
    await expect(ready()).resolves.toHaveProperty('message');
  });
});
