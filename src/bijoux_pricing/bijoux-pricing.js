/**
 * We want to create a program that can give the price
 * of a bijoux according to its characteristics : metal weight , stones (weight)
 *
 * the price of a bijoux is MW * price of this metal + [stones weight * stone price]
 */

class BijouxPricing {
  constructor() {
    this.bijoux = null;
  }

  setBijoux({ metalWeight, metalPrice, stoneWeight, stonePrice }) {
    this.bijoux = {
      metalWeight,
      metalPrice,
      stoneWeight,
      stonePrice,
    };
  }

  price() {
    if (this.bijoux) {
      const { metalWeight, metalPrice, stoneWeight, stonePrice } = this.bijoux;

      return metalWeight * metalPrice + stoneWeight * stonePrice;
    }
    return 0;
  }

  setBijouxWithMultipleStones({ metalWeight, metalPrice, stones }) {
    this.bijoux = {
      metalWeight,
      metalPrice,
      stones,
    };
  }

  priceWithMultipleStones() {
    const { metalWeight, metalPrice, stones } = this.bijoux;
    return (
      metalPrice * metalWeight +
      stones.reduce((stoneV, current) => stoneV + current.stonePrice * current.stoneWeight, 0)
    );
  }
}

module.exports = BijouxPricing;
