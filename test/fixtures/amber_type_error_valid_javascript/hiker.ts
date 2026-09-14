function multiply(a: number, b: number): number {
  return a * b;
}

// As JavaScript this runs and returns 42, because * coerces '7' to a number.
// Only the type-check objects to it, so this is the case that separates what
// tsc rejects from what would actually have gone wrong at run time.
export function answer(): number {
  return multiply(6, '7');
}
