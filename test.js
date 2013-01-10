var mocker = require('./index')
var assert = require('assert')
var resourceful = require('Resourceful')

function getModel() {
  var Job = resourceful.define('job')
  Job.string('id', {default: ''})
  Job.string('clientId', {default: ''})
  Job.string('description', {default: 'yuck'})
  Job.string('title', {default: 'title-yo'})
  Job.number('total', {default: 0})
  Job.number('hires', {default: 0})
  Job.number('active', {default: 0})
  Job.bool('inviteOnly', {default: false})
  Job.number('created', {default: 0})
  return Job;
}

// make sure it returns the right number
function testCount() {
  var J = getModel()
  var data = mocker(J)
  assert(!(data instanceof Array))
  data = mocker(J, 5)
  assert.equal(data.length, 5)
}

// test the basic types
function testTypes() {
  var J = getModel()
  var data = mocker(J)
  assert.equal(typeof data.title, 'string')
  assert.equal(typeof data.description, 'string')
  assert.equal(typeof data.inviteOnly, 'boolean')
  assert.equal(typeof data.created, 'number')
}

// force it to use defaultss
function testDefaults() {
  var J = getModel()
  var data = mocker(J, 1, true)
  assert.equal(data.description, 'yuck')
  assert.equal(data.created, 0)
}

function testDemo() {
	
	// create a resoureceful model
	var Creature = resourceful.define('creature', function () {
		this.string('diet');
		this.bool('vertebrate');
		this.number('teeth', {default: 2});
	});
	
	// create a single creature-like object
	var mock = mocker(Creature)
	
	// create an array of 4 creature-like objects
	var mocks = mocker(Creature, 4)
	
	// force mock to use defaults where they exist
	var defMock = mocker(Creature, 1, true)
}

testTypes()
testDefaults()
testCount()
testDemo()
