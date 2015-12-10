export default class Scoring {
  constructor() {
    this.score = 0;
  }

  newGame() {
    this.score = 0;
  }

  tableauCardTurnedUp() {
    this.score += 5;
  }

  dropped(source, destionation) {
    this.score += scoreForMoving(source, destionation) || 0;
  }

  wasteRecycled() {
    this.score = Math.max(this.score - 100, 0);
  }
}

function scoreForMoving(source, destionation) {
  if (destionation.name === "TableauPile") {
    if (source.name === "FoundationPile") {
      return -15;
    }
    return 5;
  }
  if (destionation.name === "FoundationPile") {
    if (source.name === "TableauPile" || source.name === "WastePile") {
      return 10;
    }
  }
}
