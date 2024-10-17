 const ALPHABET =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const BASE = ALPHABET.length;

export function encode(id: number): string {
  let encoded = "";
  while (id) {
    let remainder = id % BASE;
    id = Math.floor(id / BASE);
    encoded = ALPHABET[remainder] + encoded;
  }
  return encoded;
}

export function decode(encoded: string): number {
  let id = 0;
  for (let char of encoded) {
    id = id * BASE + ALPHABET.indexOf(char);
  }
  return id;
}
