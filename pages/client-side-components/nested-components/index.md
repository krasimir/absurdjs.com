# Nested components

<social>

While having a complex web page you may end up with nested components. AbsurdJS provides a mechanism for solving such problems.

	var Child = absurd.component("ChildClass", {
		text: "click me",
		html: {
			'a[data-absurd-event="click:handler" href="#"]': "<% this.text %>"
		},
		handler: function(e) {
			this.text = "Wow!!!";
			this.populate();
		}
	});

	var main = absurd.component("MainClass", {
		html: {
			section: [
				"<% this.child('link1') %>, ",
				"<% this.child('link2') %>"
			]
		}
	})();
	main.set("children", {
		link1: Child(),
		link2: Child()
	});
	main.set('parent', document.querySelector('body')).populate();

So, there are two component classes defined - `ChildClass` and `MainClass`. Before to call the `populate` method of the `main` variable we set its `children`. We should pass a hash object. The keys are unique strings which are later used in the template of the component (the `html` property). Notice that we are not calling the `populate` method of the nested components. That's a job of AbsurdJS. It always check if some component has children. And if yes then it triggers their compilation.

<small class="jsbin"><i class="fa fa-code"></i> [](http://jsbin.com/yucek/1/)</small>