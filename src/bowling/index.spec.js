const { BowlingGame, rollMany, playSpare, playStrikes } = require('./index');

describe('BowlingGame', () => {
  let bowlingGame;

  beforeEach(() => {
    bowlingGame = new BowlingGame();
  });

  it('should return a score of 0 when player is really bad', () => {
    bowlingGame = rollMany(0, 20, bowlingGame);
    const result = bowlingGame.score();
    expect(result).toEqual(0);
  });

  it('should return a score of 0 when only 1s', () => {
    bowlingGame = rollMany(1, 20, bowlingGame);
    const result = bowlingGame.score();
    expect(result).toEqual(20);
  });

  it('should count bonus spare', () => {
    bowlingGame = playSpare(bowlingGame);
    bowlingGame = rollMany(4, 1, bowlingGame);
    bowlingGame = rollMany(0, 17, bowlingGame);

    const result = bowlingGame.score();
    expect(result).toEqual(18);
  });

  it('should count bonus spare on last frame', () => {
    bowlingGame = rollMany(0, 18, bowlingGame);
    bowlingGame = playSpare(bowlingGame);
    bowlingGame = rollMany(4, 1, bowlingGame);

    const result = bowlingGame.score();
    expect(result).toEqual(14);
  });

  it('should count bonus strike', () => {
    bowlingGame = playStrikes(1, bowlingGame);
    bowlingGame = rollMany(4, 2, bowlingGame);
    bowlingGame = rollMany(0, 16, bowlingGame);

    const result = bowlingGame.score();
    expect(result).toEqual(26);
  });

  it('should count bonus strike on only strikes', () => {
    bowlingGame = playStrikes(12, bowlingGame);

    const result = bowlingGame.score();
    expect(result).toEqual(300);
  });
});
