import Pile from "./pile.js";

export default function WastePile(cards, scoring) {
  Pile.call(this, cards, scoring);
}

WastePile.prototype = Object.create(Pile.prototype);
WastePile.prototype.constructor = WastePile;
