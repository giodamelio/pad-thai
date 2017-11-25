const { padThai, padThaiStart, padThaiEnd } = require('../');

describe('padThai()', () => {
  it('Pad correctly', () => {
    expect.assertions(1);

    expect(padThai('-AAA-', 22)).toBe('thaithai-AAA-thaithait');
  });
});

describe('padThaiStart()', () => {
  it('Pad correctly', () => {
    expect.assertions(1);

    expect(padThaiStart('-AAA-', 22)).toBe('thaithaithaithait-AAA-');
  });
});

describe('padThaiEnd()', () => {
  it('Pad correctly', () => {
    expect.assertions(1);

    expect(padThaiEnd('-AAA-', 22)).toBe('-AAA-thaithaithaithait');
  });
});
