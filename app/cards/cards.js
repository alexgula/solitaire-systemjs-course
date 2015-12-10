export default class Card {
  constructor(card) {
    this.suit = card.suit;
    this.rank = card.rank;
    this.image = (Card.ranksInImagesOrder.indexOf(this.rank) * 4 + Card.suitsInImagesOrder.indexOf(this.suit) + 1) + ".png";
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

Card.ranksInImagesOrder = ["Ace", "King", "Queen", "Jack", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
Card.suitsInImagesOrder = ["Clubs", "Spades", "Hearts", "Diamonds"];
