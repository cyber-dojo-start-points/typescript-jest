import { answer } from './hiker';

// The loop sits at module scope, outside any test, so jest's per-test timeout
// never applies and the hang cannot degrade into an ordinary test failure.
while (answer() === 42) {
  // deliberately empty
}

describe('answer', () => {
  it('to life the universe and everything', () => {
    expect(answer()).toEqual(42);
  });
});
