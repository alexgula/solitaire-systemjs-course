/* global System */

var systemNormalize = System.normalize;
System.normalize = function (name, parentName, parentAddress) {
  console.log("normalize:", {
    name: name,
    parentName: parentName,
    parentAddress: parentAddress
  });
  return systemNormalize.call(this, name, parentName, parentAddress);
}

var systemLocate = System.locate;
System.locate = function (load) {
  console.log("locate:", load);
  return systemLocate.call(this, load);
}

var systemFetch = System.fetch;
System.fetch = function (load) {
  console.log("fetch:", load);
  return systemFetch.call(this, load);
}

var systemTranslate = System.translate;
System.translate = function (load) {
  console.log("translate:", load);
  return systemTranslate.call(this, load);
}

var systemInstantiate = System.instantiate;
System.instantiate = function (load) {
  console.log("instantiate:", load);
  return systemInstantiate.call(this, load);
}