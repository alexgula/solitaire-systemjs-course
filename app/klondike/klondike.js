import angular from "angular";
import "angular-route";

import KlondikeGame from "./game.js";
import Scoring from "./scoring.js";
import "./board.js";

angular.module("klondike.game", [])
  .service("klondikeGame", ["scoring", KlondikeGame]);

angular.module("klondike.scoring", [])
  .service("scoring", [Scoring]);

angular.module("klondike", [
  "klondike.game",
  "klondike.board",
  "klondike.scoring"
]);
