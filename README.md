# Resourceful-Mocker
## Easily mock Resourceful models

This module is supposed to make it easy to create some basic mocks of your Resourceful models.

Why would you want to do this? Well, it's nice if you're puting together and API and you want to quickly make sure it's working.

## Usage

The basic usage of this module is very simple.

	var mocker = require('resourceful-mocker')
	var resourceful = require('resourceful');
	
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

## Tests

You can run tests by typing the following:

	npm test

## To Do

- [ ] Add support for all Resourceful types
- [ ] Respect Validation Criteria
- [ ] Provide support for JSON mocks

## License

This module can be used for free with no attribution. 

