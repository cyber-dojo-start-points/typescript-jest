export function answer(): number {
  process.stderr.write('answer was called\n');
  return 6 * 7;
}
