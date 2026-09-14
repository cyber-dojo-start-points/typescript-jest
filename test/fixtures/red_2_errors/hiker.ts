// The array is empty, so digits[0] is undefined at run time and reading
// .length off it throws. tsc types digits[0] as string and accepts the line,
// which is what lets this case reach jest at all.
export function answer(): number {
  const digits: string[] = [];
  return digits[0].length * 42;
}
