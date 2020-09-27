class PrimeFactors {
  generate(input) {
    let localInput = input;
    const primes = [];
    for (let divisor = 2; divisor <= localInput; divisor += 1) {
      for (; localInput % divisor === 0; localInput /= divisor) {
        primes.push(divisor);
      }
    }

    return primes;
  }
}

module.exports = PrimeFactors;
