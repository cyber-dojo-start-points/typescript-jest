import { answer } from './hiker';

describe('answer', () => {
  it('to life the universe and everything', () => {
    expect(answer()).toEqual(42);
  });

  it('is an even number', () => {
    expect(answer() % 2).toEqual(0);
  });

  it('has two digits', () => {
    expect(String(answer()).length).toEqual(2);
  });
});
