const BijouxPricing = require('./bijoux-pricing');

describe('bijoux pricing application', () => {
  let bijouxPricing;

  beforeEach(() => {
    bijouxPricing = new BijouxPricing();
  });

  it('should return 0 when a bijoux has no stones and no metal', () => {
    const result = bijouxPricing.price();
    expect(result).toBe(0);
  });

  it('should return 2 when we have 1 stone and 1 metal that cost 1', () => {
    bijouxPricing.setBijoux({
      metalWeight: 1,
      metalPrice: 1,
      stoneWeight: 1,
      stonePrice: 1,
    });

    const result = bijouxPricing.price();
    expect(result).toBe(2);
  });

  it('should return 5 when we have 1 stone that costs 3 and 1 metal that costs 2', () => {
    bijouxPricing.setBijoux({
      metalWeight: 1,
      metalPrice: 2,
      stoneWeight: 1,
      stonePrice: 3,
    });

    const result = bijouxPricing.price();
    expect(result).toBe(5);
  });

  it('should price for a bijoux with multiple stones (all at one)', () => {
    bijouxPricing.setBijouxWithMultipleStones({
      metalWeight: 1,
      metalPrice: 1,
      stones: [
        { stoneWeight: 1, stonePrice: 1 },
        {
          stoneWeight: 1,
          stonePrice: 1,
        },
      ],
    });
    const result = bijouxPricing.priceWithMultipleStones();
    expect(result).toBe(3);
  });

  it('should price for a bijoux with multiple stones different prices', () => {
    bijouxPricing.setBijouxWithMultipleStones({
      metalWeight: 1,
      metalPrice: 15,
      stones: [
        { stoneWeight: 1, stonePrice: 5 },
        {
          stoneWeight: 2,
          stonePrice: 10,
        },
      ],
    });
    const result = bijouxPricing.priceWithMultipleStones();
    expect(result).toBe(40);
  });
});
