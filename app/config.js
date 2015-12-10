System.config({
  transpiler: 'traceur',
  map: {
    'traceur': "../app/bower_components/traceur/traceur.js" // need redundant ../app since karma-jspm sets baseURL to 'base'
  }
});
