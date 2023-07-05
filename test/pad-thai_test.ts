import { assertEquals } from 'https://deno.land/std@0.193.0/testing/asserts.ts';

import { padThai, padThaiStart, padThaiEnd } from '../src/index.ts';

Deno.test('padThai()', async (t) => {
  await t.step('Pad correctly', async () => {
    assertEquals(padThai('-AAA-', 22), 'thaithai-AAA-thaithait');
  })
});

Deno.test('padThaiStart()', async (t) => {
  await t.step('Pad correctly', async () => {
    assertEquals(padThaiStart('-AAA-', 22), 'thaithaithaithait-AAA-');
  })
});

Deno.test('padThaiEnd()', async (t) => {
  await t.step('Pad correctly', async () => {
    assertEquals(padThaiEnd('-AAA-', 22), '-AAA-thaithaithaithait');
  })
});
