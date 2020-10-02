class ConwaysSuite {
  compute(input) {
    const result = [];

    for (let i = 1; i <= input; i += 1) {
      if (i === 1) {
        result.push('1');
      } else {
        const previousTermValue = result[i - 2];
        const currentTermValue = this.parseTerm(previousTermValue);
        result.push(currentTermValue);
      }
    }
    return result;
  }

  parseTerm(term) {
    let currentTermValue = '';

    for (let j = 0; j < term.length; ) {
      if (term[j] === term[j + 1]) {
        currentTermValue += `2${term[j]}`;
        j += 2;
      } else {
        currentTermValue += `1${term[j]}`;
        j += 1;
      }
    }

    return currentTermValue;
  }
}

module.exports = ConwaysSuite;
