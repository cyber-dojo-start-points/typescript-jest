import { answer } from './hiker';

describe('answer', () => {
  it('to life the universe and everything', () => {
    expect(answer()).toEqual(42);
  });

  it('has two digits', () => {
    // digits[0] is undefined at run time, so this throws rather than failing
    // an expectation. tsc types it as string and accepts the line.
    const digits: string[] = [];
    expect(digits[0].length).toEqual(2);
  });
});
