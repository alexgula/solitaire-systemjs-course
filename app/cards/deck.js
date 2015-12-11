import _ from "underscore";

import { Card, ranksInImagesOrder, suitsInImagesOrder } from "./card.js";

export default class Deck {
  unShuffled() {
    return _.chain(ranksInImagesOrder)
      .map(function (rank) {
        return suitsInImagesOrder.map(function (suit) {
          return {
            suit: suit,
            rank: rank
          };
        });
      })
      .flatten()
      .map(function (card) {
        return new Card(card);
      })
      .value();
  }

  shuffled() {
    return _.shuffle(this.unShuffled());
  }
}
