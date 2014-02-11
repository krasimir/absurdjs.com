# Definition

To create a component you need first to define a class. That's what `absurd.component` API is for.

	var absurd = Absurd();
	var CompClass = absurd.component("CompClass", {
		constructor: function(param) {
			// ...
		}
	});
	var component = CompClass();

Every component has a constructor function which is called one you create a new instance of the class. Your component may or may not accept arguments.

## Local variables and methods

There is no wrapper or something around the object which you pass during the class's definition. This means that you could define variables or methods and they are accessible as public API of your component.

	var Human = absurd.component("Human", {
		name: '',
		sayHi: function() {
			alert('Hello, my name is ' + this.name + '.');
		},
		constructor: function(firstname, lastname) {
			this.name = firstname + ' ' + lastname;
		}
	});
	var human = Human('John', 'Black');
	human.sayHi();