import { answer } from './hiker';

describe('answer', () => {
  it('to life the universe and everything', () => {
    expect(answer()).toEqual(42);
  });

  it('is six times seven', () => {
    expect(answer()).toEqual(6 * 7);
  });
});
