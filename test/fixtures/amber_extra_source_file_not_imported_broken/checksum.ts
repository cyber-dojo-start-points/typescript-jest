// Nothing imports this file, so jest would never parse it. tsconfig.json
// names no include list, so tsc takes every .ts file under the sandbox and
// parses this one anyway. cyber-dojo.sh stops at tsc.
export function checksum(text: string): number {
  return text.length %%% 256;
}
