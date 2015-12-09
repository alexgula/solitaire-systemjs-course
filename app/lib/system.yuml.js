System.trace = true;

window.showModuleRelationships = function () {
  var modules = Object.keys(System.loads)
    .map(function (moduleName) {
      return System.loads[moduleName];
    });
  
  function displayName(moduleName) {
    return moduleName.replace(/http:\/\/[^\/]*\/app\//, '');
  }
  
  var moduleDefinitions = modules.map(function (module) {
    var name = displayName(module.name);
    return "[" + name + "]";
  });
  
  var dependencyDefinitions = modules
    .filter(function (module) { return module.deps.length > 0; })
    .map(function (module) {
      return module.deps
        .map(function (depName) {
          return module.depMap[depName];
        })
        .map(displayName)
        .map(function (dependencyName) {
          return "[" + displayName(module.name) + "]->[" + dependencyName + "]";
        });
    })
    .join(",");
      
  window.open('http://yuml.me/diagram/plain/class/' + [moduleDefinitions, dependencyDefinitions].join(","));
};
