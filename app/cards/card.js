export class Card {
  constructor(card) {
    this.suit = card.suit;
    this.rank = card.rank;
    this.image = (ranksInImagesOrder.indexOf(this.rank) * 4 + suitsInImagesOrder.indexOf(this.suit) + 1) + ".png";
    this.color = card.suit === "Spades" || card.suit === "Clubs" ? "black" : "red";
    this.turnedUp = false;
  }

  turnUp() {
    this.turnedUp = true;
  }

  turnDown() {
    this.turnedUp = false;
  }
}

export const ranksInImagesOrder = ["Ace", "King", "Queen", "Jack", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
export const suitsInImagesOrder = ["Clubs", "Spades", "Hearts", "Diamonds"];
