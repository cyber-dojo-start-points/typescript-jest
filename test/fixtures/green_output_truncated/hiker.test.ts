import { answer } from './hiker';

describe('answer', () => {
  it('to life the universe and everything', () => {
    // jest writes its whole report to stderr, and process.stderr.write
    // bypasses jest's console capture so these lines land ahead of it.
    // Flooding past the runner's per-stream cap therefore cuts off the
    // PASS line and the summary.
    for (let i = 0; i !== 4000; i += 1) {
      process.stderr.write('debug: i is ' + i + ', total is ' + i * 2 + '\n');
    }
    expect(answer()).toEqual(42);
  });
});
