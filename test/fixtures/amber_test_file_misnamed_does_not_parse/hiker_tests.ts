import { answer } from './hiker';

// jest never collects this name, but tsconfig.json names no include list, so
// tsc takes every .ts file under the sandbox and this one is parsed all the
// same. cyber-dojo.sh stops at tsc, and jest is never reached.
describe('answer', () => {
  it('has three digits', () => {
    expect(String(answer()).length).toEqual(???);
  });
});
