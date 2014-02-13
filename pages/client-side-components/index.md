# Client-side components

<social>

The web development nowadays is all about managing HTML, CSS and JavaScript. AbsurdJS is a JavaScript library and could produce [CSS](/pages/css-preprocessing/) and [HTML](/pages/html-preprocessing/). And because it is ported for a client-side usage it was normal to form some kind of web components. Components which are trully build with JavaScript. No external CSS files or HTML templates.

	var absurd = Absurd();
	var ComponentClass = absurd.component("ComponentName", {
		css: {
			'.component': {
				h1: { color: '#F00' }
			}
		},
		html: {
			'.component': {
				h1: '<% this.name %>'
			}
		},
		constructor: function(name) {
			  this.name = name;
			  this.set('parent', this.qs('body')).populate();
		}
	});
	var comp = ComponentClass("AbsurdJS");

`absurd.component` API defines a class, which you later could create instances from. The entry point of every component is its `.constructor` method. In the example above we set a local variable `name` which is used in the HTML template of the component. `this.set('parent', ...)` tells to AbsurdJS what will be the parent DOM element and `this.qs` is just an alias to `document.querySelector`. `populate` is the only one long method. It checks for `css` and `html` properties and launches the proper preprocessors. As a result your page contains a new `<style>` tag and a new `<div class="component">` element into the DOM.

<example>
<html>
&lt;style id="ComponentName-css" type="text/css">
.component h1 {
	color: #F00;
}
&lt;/style>
</html>
<html>
&lt;div class="component">
	&lt;h1>AbsurdJS&lt;/h1>
&lt;/div>
</html>
</example>

Here is a JSBin to play with:

<a class="jsbin-embed" href="http://jsbin.com/juwap/3/embed?js,output">JS Bin</a><script src="http://static.jsbin.com/js/embed.js"></script>

The main goal of AbsurdJS components are to implement things which you already know and use. At the same time to act as an utility, as a helper and not as a framework. For example, every component is actually an event dispatcher, there is dependency injector implemented. You could use the build-in Router or the HTTP request module. What you should remember is that it is up to you to bootstrap the components and wire them into a complete application. Frameworks like Angular, Knockout or Ember provide enormous list of features and if you want to use a framework then you better check them. However, if you need a custom solution or you want to simplify the already started project AbsurdJS is suitable for you. It is a minimalistic collection of helpful JavaScript snippets which main purpose is to avoid the *magical* moments, by providing transparency.

	