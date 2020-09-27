const PrimeFactors = require('./index');

describe('primes factors', function () {
  describe('generate method', function () {
    let primeFactors;
    beforeEach(() => {
      primeFactors = new PrimeFactors();
    });

    it('should return [] when given 1', function () {
      const result = primeFactors.generate(1);
      expect(result).toStrictEqual([]);
    });

    it('should return [2] when given 2', () => {
      const result = primeFactors.generate(2);
      expect(result).toStrictEqual([2]);
    });

    it('should return [3] when given 3', () => {
      const result = primeFactors.generate(3);
      expect(result).toStrictEqual([3]);
    });

    it('should return [2,2] when given 4', () => {
      const result = primeFactors.generate(4);
      expect(result).toStrictEqual([2, 2]);
    });

    it('should return [5] when given 5', () => {
      const result = primeFactors.generate(5);
      expect(result).toStrictEqual([5]);
    });

    it('should return [2,3] when given 6', () => {
      const result = primeFactors.generate(6);
      expect(result).toStrictEqual([2, 3]);
    });

    it('should return [7] when given 7', () => {
      const result = primeFactors.generate(7);
      expect(result).toStrictEqual([7]);
    });

    it('should return [2,2,2] when given 8', () => {
      const result = primeFactors.generate(8);
      expect(result).toStrictEqual([2, 2, 2]);
    });

    it('should return [3,3] when given 9', () => {
      const result = primeFactors.generate(9);
      expect(result).toStrictEqual([3, 3]);
    });

    it('should return [3,3,3] when given 27', () => {
      const result = primeFactors.generate(27);
      expect(result).toStrictEqual([3, 3, 3]);
    });

    it('should return [2,2,3,5,7,11] when given 4620', () => {
      const result = primeFactors.generate(4620);
      expect(result).toStrictEqual([2, 2, 3, 5, 7, 11]);
    });
  });
});
