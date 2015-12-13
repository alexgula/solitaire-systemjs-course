import angular from "angular";
import "angular-route";
import cardTemplate from "../cards/card.html!text";
import boardTemplate from "./board.html!text";
import tableauPileTemplate from "./piles/tableau.html!text";
import foundationPileTemplate from "./piles/foundation.html!text";
import remainderPileTemplate from "./piles/remainder.html!text";
import wastePileTemplate from "./piles/waste.html!text";
import welcomeTemplate from "./welcome.md!";

angular.module("klondike.board", ["ngRoute", "klondike.game"])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when("/board", {
        template: boardTemplate,
        controller: "KlondikeController"
      })
      .otherwise({ redirectTo: "/board" });
  }])
  .controller("KlondikeController", ["$scope", "klondikeGame", "scoring", function KlondikeController($scope, klondikeGame, scoring) {
    klondikeGame.newGame();
    $scope.game = klondikeGame;
    $scope.scoring = scoring;
  }])
  .directive("sNoPile", function () {
    return {
      restrict: "E",
      template: "<div class=\"no-pile\"></div>"
    };
  })
  .directive("sTableau", function () {
    return {
      restrict: "E",
      template: tableauPileTemplate
    };
  })
  .directive("sFoundation", function () {
    return {
      restrict: "E",
      template: foundationPileTemplate
    };
  })
  .directive("sCard", function () {
    return {
      restrict: "A",
      template: cardTemplate,
      scope: {
        card: "="
      }
    };
  })
  .directive("sRemainder", function () {
    return {
      restrict: "E",
      template: remainderPileTemplate
    };
  })
  .directive("sWaste", function () {
    return {
      restrict: "E",
      template: wastePileTemplate
    };
  })
  .directive("sWelcome", function () {
    return {
      restrict: "E",
      template: welcomeTemplate
    };
  });
