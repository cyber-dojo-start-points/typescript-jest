export function checksum(text: string): number {
  return text.length % 256;
}
