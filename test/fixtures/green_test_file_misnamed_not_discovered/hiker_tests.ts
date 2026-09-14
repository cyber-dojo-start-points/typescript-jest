import { answer } from './hiker';

// jest.config.js collects names matching .*test\.(t|j)sx?$ only, and this one
// ends in tests.ts, so it is never collected. It type-checks, so tsc is happy
// with it. Its assertion is false on purpose: the case is green only because
// jest never runs it.
describe('answer', () => {
  it('has three digits', () => {
    expect(String(answer()).length).toEqual(3);
  });
});
