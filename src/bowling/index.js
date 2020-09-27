class BowlingGame {
  constructor() {
    this.rolls = [];
  }

  roll(numberOfPins) {
    this.rolls.push(numberOfPins);
  }

  score() {
    let score = 0;
    let rollIndex = 0;
    for (let frameIndex = 1; frameIndex <= 10; frameIndex += 1) {
      if (this.isStrike(rollIndex)) {
        score += 10 + this.getStrikeBonus(rollIndex);
        rollIndex += 1;
      } else if (this.isSpare(rollIndex)) {
        score += 10 + this.getSpareBonus(rollIndex);
        rollIndex += 2;
      } else {
        score += this.getFrameScore(rollIndex);
        rollIndex += 2;
      }
    }
    return score;
  }

  isSpare(rollIndex) {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10;
  }

  isStrike(rollIndex) {
    return this.rolls[rollIndex] === 10;
  }

  getStrikeBonus(rollIndex) {
    return this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
  }

  getSpareBonus(rollIndex) {
    return this.rolls[rollIndex + 2];
  }

  getFrameScore(rollIndex) {
    const firsRollScore = this.rolls[rollIndex];
    const secondRollScore = this.rolls[rollIndex + 1];

    return firsRollScore + secondRollScore;
  }
}

function rollMany(numberOfPins, numberOfRolls, game) {
  for (let i = 0; i < numberOfRolls; i += 1) {
    game.roll(numberOfPins);
  }
  return game;
}

function playSpare(game) {
  game.roll(4);
  game.roll(6);

  return game;
}

function playStrikes(occurrence, game) {
  for (let i = 0; i < occurrence; i += 1) {
    game.roll(10);
  }

  return game;
}

module.exports = { BowlingGame, rollMany, playSpare, playStrikes };
