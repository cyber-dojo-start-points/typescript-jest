import { answer } from './hiker';

describe('answer size', () => {
  it('has two digits', () => {
    expect(String(answer()).length).toEqual(2);
  });

  it('has three digits', () => {
    expect(String(answer()).length).toEqual(3);
  });
});
