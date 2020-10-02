/**
 * 1 1
 * 2 11
 * 3 21
 * 4 1211
 * 5 111221
 * 6 21112211
 *
 * Write a function that displays the n'th term of conways suite
 * **/
const ConwaysSuite = require('./conwaysSuite');

describe('Conways suite', () => {
  let conwaysSuite;

  beforeEach(() => {
    conwaysSuite = new ConwaysSuite();
  });

  it('should return empty string when given 0', () => {
    const result = conwaysSuite.compute(0);
    expect(result).toEqual([]);
  });

  it("should return ['1'] for the first term", () => {
    const result = conwaysSuite.compute(1);
    expect(result).toEqual(['1']);
  });

  it("should return ['1', '11'] for the second term", () => {
    const result = conwaysSuite.compute(2);
    expect(result).toEqual(['1', '11']);
  });

  it("should return ['1', '11', '21'] for the third term, eg count the number of 1", () => {
    const result = conwaysSuite.compute(3);
    expect(result).toEqual(['1', '11', '21']);
  });

  it("should return ['1', '11', '21', '1211'] for the 4th term, eg count the number of 2", () => {
    const result = conwaysSuite.compute(4);
    expect(result).toEqual(['1', '11', '21', '1211']);
  });

  it("should return ['1', '11', '21', '1211','111221'] for the 4th term, eg count the number of 2", () => {
    const result = conwaysSuite.compute(5);
    expect(result).toEqual(['1', '11', '21', '1211', '111221']);
  });

  it("should return ['1', '11', '21', '1211','111221', '21112211'] for the 4th term, eg count the number of 2", () => {
    const result = conwaysSuite.compute(6);
    expect(result).toEqual(['1', '11', '21', '1211', '111221', '21112211']);
  });
});
