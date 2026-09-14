import { fizzBuzz } from './fizz_buzz';

describe('fizzBuzz', () => {
  it('says FizzBuzz for a multiple of fifteen', () => {
    expect(fizzBuzz(30)).toEqual('FizzBuzz');
  });

  it('says Fizz for a multiple of three', () => {
    expect(fizzBuzz(9)).toEqual('Fizz');
  });

  it('says Buzz for a multiple of five', () => {
    expect(fizzBuzz(20)).toEqual('Buzz');
  });

  it('says the number itself otherwise', () => {
    expect(fizzBuzz(7)).toEqual('7');
  });
});
