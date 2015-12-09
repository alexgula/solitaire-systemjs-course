import "./game.js";
import "./board.js";
import "./scoring.js";

angular.module("klondike", [
  "klondike.game",
  "klondike.board",
  "klondike.scoring"
]);
