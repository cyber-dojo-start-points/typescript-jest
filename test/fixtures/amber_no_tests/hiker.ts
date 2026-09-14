// There is no test file at all. tsc is happy, so cyber-dojo.sh goes on to
// jest, which collects nothing and reports "No tests found". That output
// carries neither PASS nor FAIL, so the lambda falls through to amber.
export function answer(): number {
  return 6 * 7;
}
