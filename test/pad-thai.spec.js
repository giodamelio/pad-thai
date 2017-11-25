const { padThai } = require('../');

describe('padThai()', () => {
  it('Pad correctly', () => {
    expect.assertions(1);

    expect(padThai('-AAA-', 22)).toBe('thaithai-AAA-thaithait');
  });
});
