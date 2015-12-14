/* eslint-env node*/

module.exports = function (config) {
  "use strict";

  config.set({

    basePath: "./",

    files: [],

    proxies: {
      "/base/jspm_packages": "/base/app/jspm_packages",
      "/base/cards": "/base/app/cards",
      "/base/klondike": "/base/app/klondike",
      "/base/lib": "/base/app/lib"
    },

    jspm: {
      serveFiles: [
        "app/**/*.js",
        "app/**/*.css",
        "app/**/*.html",
        "app/**/*.md"
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
