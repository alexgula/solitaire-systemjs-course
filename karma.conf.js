/* eslint-env node*/

module.exports = function (config) {
  "use strict";

  config.set({

    basePath: "./",

    files: [
      "app/bower_components/angular/angular.js",
      "app/bower_components/angular-route/angular-route.js",
      "app/bower_components/angular-mocks/angular-mocks.js",
      "app/bower_components/underscore/underscore.js"
    ],

    proxies: {
      "/base/jspm_packages": "/base/app/jspm_packages"
    },

    jspm: {
      config: "app/config.js",
      serveFiles: [
        "app/**/*.js"
      ],
      loadFiles: [
        "tests/**/*.js"
      ],
      stripExtension: false
    },

    autoWatch: true,

    frameworks: ["jspm", "jasmine"],

    browsers: ["Chrome"],

    plugins: [
      "karma-jspm",
      "karma-chrome-launcher",
      "karma-firefox-launcher",
      "karma-jasmine",
      "karma-junit-reporter"
    ],

    junitReporter: {
      outputFile: "test_out/unit.xml",
      suite: "unit"
    }

  });
};
