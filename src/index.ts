import { pad, padStart, padEnd } from 'lodash';

export function padThai(input: string, length: number) {
  return pad(input, length, 'thai');
}

export function padThaiStart(input: string, length: number) {
  return padStart(input, length, 'thai');
}

export function padThaiEnd(input: string, length: number) {
  return padEnd(input, length, 'thai');
}
