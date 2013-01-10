module.exports = function(model, num, useDefaults) {
  num = num || 1;
  var props = model.schema.properties;
  var data = getAMock(props, useDefaults);
  if (num > 1) {
    data = [];
    for (var i = 0; i < num; i++) {
      data[i] = getAMock(props);
    }
  }
  return data;
}

var fakesByType = {
  "string": function() {
    var a = [];
    for (var i = 0; i < 20; i++) {
      a[i] = parseInt(Math.random() * 55 + 65, 10)
    }
    return String.fromCharCode.apply(String, a) 
  },
  "number": function() {
    return parseInt(Math.random() * 10, 10);
  },
  "boolean": function() {
    return Math.random() > .5;
  }
}

function getAMock(props, useDefaults) {
  var mock = {}
  var prop, val
  for (prop in props) {
	def = props[prop].default
	val = getMockForType(props[prop].type)
	if (useDefaults) val = def !== 'undefined' ? def : val
	mock[prop] = val
  }
 return mock;
}

function getMockForType(type) {
  if (type === "any") type = "string"
  return fakesByType[type]()
}
