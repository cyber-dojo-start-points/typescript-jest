import { answer } from './hiker';

describe('answer', () => {
  it('to life the universe and everything', () => {
    expect(answer()).toEqual(42);
  });

  it('is six times seven', () => {
    expect(answer()).toEqual(6 * 7);
  });

  it('is not six times nine', () => {
    expect(answer()).not.toEqual(6 * 9);
  });
});
