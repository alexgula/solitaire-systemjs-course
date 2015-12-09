import "klondike/klondike.js";

angular.module("solitaire", ["klondike", "ngDraggable"]);

angular.element(document).ready(() => {
  angular.bootstrap(document, ['solitaire']);
});
