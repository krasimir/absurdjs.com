# Client-side API

<social>

- - -

# Factory

## Creating a component

### absurd.component ( <small class="prop-values">name of component, object</small> )
	
    var Class = absurd.component('MyComponent', {
		// ...
	});
	var instance = Class();

### absurd.components.register ( <small class="prop-values">name of component, object</small> )
	
    var Class = absurd.components.register('MyComponent', {
		// ...
	});
	var instance = Class();

## Retrieving defined class

### absurd.components.get ( <small class="prop-values">name of component</small> )

	absurd.component("MyComp", {
	    run: function() {
	        console.log("run");
	    }
	});
	var Class = absurd.components.get("MyComp");
	var instance = Class();
	instance.run();

## Deleting defined classes

### absurd.components.flush ( )

> all classes

### absurd.components.remove ( <small class="prop-values">name of component</small> )

## Getting a list of all the defined components

### absurd.components.list (  )

## Broadcasting a message to all defined components

### absurd.components.broadcast( <small class="prop-values">name of the message, data</small> )

	absurd.component('MyCompA', {
	    message: function(data) {
	        console.log('data: ' + data);
	    }
	})();
	absurd.component('MyCompB', {
	    message: function(data) {
	        console.log('data: ' + data);
	    }
	})();
	absurd.components.broadcast('message', 42);

<br /><br />
- - -

# Component class API

<!-- -------------------------------------------------------------------- Properties -- -->

## Properties

### __name (string)

> Returns the name of the component.

	absurd.component('MyComp', {
	    constructor: function() {
	        console.log(this.__name); // MyComp
	    }
	})();

### listeners (object)

> It keeps the current added listeners.

	absurd.component('MyComp', {
	    constructor: function() {
	        this.on('my-custom-event', function() { });
	        console.log(this.listeners); // { 'my-custom-event': [] }
	    }
	})(); 

### css (object)

> CSS waiting for compilation. Check `populate` method for details.

### html (object)

> HTML waiting for compilation. Check `populate` method for details.

### el (DOM element)

> The element is available after the calling of `populate` method.
	

<!-- -------------------------------------------------------------------- Methods -- -->

## Methods

### constructor ( <small class="prop-values">parameters ...</small> )

> The init method of the component. Called when a new instance is created.

	absurd.component('MyComp', {
	    constructor: function() {
	        console.log('created');
	    }
	})();

### ready ( <small class="prop-values">JavaScript Event object</small> )

> The method is called when the page is fully loaded. AbsurdJS listens for `load` (`onload` under IE) event of the `window` object.

	absurd.component('MyComp', {
	    ready: function(e) {
	        console.log('DOM is ready');
	    }
	})();

### on ( <small class="prop-values">name of event, handler</small> )

> Adding a listener for particular event.

	var c = absurd.component('MyComp', {
	    run: function() {
	        this.dispatch('my-custom-event', { answer: 42 });   
	    }
	})();
	c.on('my-custom-event', function(data) {
	    console.log('The answer is ' + data.answer);
	}).run();

### off ( <small class="prop-values">name of event, handler</small> )

> Removing a event listener

	var c = absurd.component('MyComp', {
	    run: function() {
	        this.dispatch('my-custom-event', { answer: 42 });   
	    }
	})();
	c.on('my-custom-event', function(data) {
	    console.log('The answer is ' + data.answer); // this is never reached
	}).off('my-custom-event').run();

### dispatch ( <small class="prop-values">name of event, data</small> )

> Triggering an event.

	var c = absurd.component('MyComp', {
	    run: function() {
	        this.dispatch('my-custom-event', { answer: 42 });   
	    }
	})();
	c.on('my-custom-event', function(data) {
	    console.log('The answer is ' + data.answer);
	}).run();

### set( <small class="prop-values">key, value</small> )

> Keeping something to the storage. If you use `parent` as a key it has a special meaning. `parent` should be a valid DOM element. After the population your component is added as a child of that element.

	absurd.component('MyComp', {
	    constructor: function() {
	        this.set('answer', 42);
	        console.log(this.get('answer'));
	    }
	})();	

### get( <small class="prop-values">key</small> )

> Retrieving something from the storage.

	absurd.component('MyComp', {
	    constructor: function() {
	        this.set('answer', 42);
	        console.log(this.get('answer'));
	    }
	})();

### applyCSS ( <small class="prop-values">data[object], preventComposition[boolean], skipAutoPopulation[boolean]</small> )

> The method sets a the `data` to the `css` property and calls `populate` method. Normally uses the `html` property to compose the CSS object. You may skip this by setting `preventComposition = false`. If you want to prevent the `populate` execution then set `skipAutoPopulation = false`.

<example>
<str text="JavaScript">
absurd.component('MyComp', {
    html: '.my-class',
    constructor: function() {
        this.applyCSS({
            fontSize: '20px',
            margin: 0
        });
    }
})();
</str>
<str text="The produced style tag">
&lt;style id="MyComp-css" type="text/css">
.my-class {
  font-size: 20px;
  margin: 0;
}
&lt;/style>
</str>
</example>

### applyHTML ( <small class="prop-values">data[object], skipAutoPopulation[boolean]</small> )

> It sets a value of the `html` and calls `populate`. If `skipAutoPopulation = false` the population is not performed.

### onAnimationEnd ( <small class="prop-values">DOM element, handler</small> )

> It listens for animation ending on particular DOM element. If only one parameter is passed then the components `el` element is used.

### onTransitionEnd ( <small class="prop-values">DOM element, handler</small> )

> It listens for transition ending on particular DOM element. If only one parameter is passed then the components `el` element is used.

### wire ( <small class="prop-values">name of an event</small> )

It wires the current component to a event dispatched from another component.

	absurd.component('MyCompA', {    
	    omg: function() {
	        console.log('omg');
	    }
	})().wire('omg');
	absurd.component('MyCompB', {
	    run: function() {
	       this.dispatch('omg'); 
	    }
	})().run();

### populate ( )

> Reads `css` and `html` properties. It compiles the CSS and the HTML by creating a new &lt;style> tag in the &lt;head> of the document and filling the `el` property. It also handles the DOM events listening and the asynchronous templating.

<example>
<js>
absurd.component('MyComp', {
    css: {
        '.my-component': { fz: '20px' }
    },
    html: {
        '.my-component': {
            p: 'Some text ...'
        }
    },
    constructor: function() {
        this.set('parent', document.body);
        this.populate();
    }
})();
</js>
<str text="Result">
// in the head tag
&lt;style id="MyComp-css" type="text/css">
.my-component {
  font-size: 20px;
}
&lt;/style>

// in the body tag
&lt;div class="my-component">
	&lt;p>Some text ...&lt;/p>
&lt;/div>
</str>
</example>

### str2DOMElement ( <small class="prop-values">html string</small> )

> Converts HTML string to a valid DOM element

	var c = absurd.component('MyComp', {})();
	var el = c.str2DOMElement('<p><small>test</small></p>');
	console.log(el.outerHTML); // <p><small>test</small></p>

### addEventListener ( <small class="prop-values">DOM element, name of the event, handler</small> )

> Attaches an event listener to DOM element.

	var c = absurd.component('MyComp', {})();
	c.addEventListener(document.body, 'click', function() {
	    console.log('clicked');
	});

### queue ( <small class="prop-values">array of functions, scope</small> )

> Running JavaScript functions in a chain.

<example>
<js>
var c = absurd.component('MyComp', {})();
c.queue([
    function(next) {
        console.log(this.name);
        next();
    },
    function(next) {
        console.log(this.name);
        next();
    },
    function(next) {
        console.log('end');
    },
], { name: 'John' });
</js>
<str text="Result">
John
John
end
</str>
</example>

### qs ( <small class="prop-values">selector, parent</small> )

> Alias of `document.querySelector`. `parent` is the scope of the query. If it is skipped the local `el` is got. If `el` is still not defined then `document` is used.

### qsa ( <small class="prop-values">selector, parent</small> )

> Alias of `document.querySelectorAll`. `parent` is the scope of the query. If it is skipped the local `el` is got. If `el` is still not defined then `document` is used.

### getStyle ( <small class="prop-values">name of a property, DOM element</small> )

> If the DOM element is skipped then the local `el` is used.

### addClass ( <small class="prop-values">name of class, DOM element</small> )

> If the DOM element is skipped then the local `el` is used.

### removeClass ( <small class="prop-values">name of class, DOM element</small> )

> If the DOM element is skipped then the local `el` is used.

### toggleClass ( <small class="prop-values">name of class, DOM element</small> )

> If the DOM element is skipped then the local `el` is used.

### replaceClass ( <small class="prop-values">name of class A, name of class B, DOM element</small> )

> If the DOM element is skipped then the local `el` is used.

### compileHTML ( <small class="prop-values">HTML as JSON, callback, data</small> )

> Using AbsurdJS [HTML preprocessing](/pages/html-preprocessing/).

	var c = absurd.component('MyComp', {})();
	c.compileHTML({ 
	    header: {
	        p: '<% this.text %>'
	    }
	}, function(err, html) {
	    console.log(html); // <header><p>My text here.</p></header>
	}, { text: 'My text here.' });

### compileCSS ( <small class="prop-values">HTML as JSON, callback, options</small> )

> Using AbsurdJS [CSS preprocessing](/pages/css-preprocessing/).

	var c = absurd.component('MyComp', {})();
	c.compileCSS({ 
	    header: {
	        p: { fz: '30px'}
	    }
	}, function(err, css) {
	    console.log(css); // header p{font-size: 30px;}
	}, { minify: true });

### delay ( <small class="prop-values">interval, function</small> )

> Alias of `setTimeout`, but it keeps the scope.

	var c = absurd.component('MyComp', {})();
	c.delay(1000, function() {
	    console.log(this.__name); // MyComp
	});

<!-- -------------------------------------------------------------------- Events -- -->

## Events

### populated

> Fired when the `populate` method finishes its job.

<example>
<js>
var c = absurd.component('MyComp', {
    populated: function() {
        console.log('catched');
    },
    run: function() {
        this.populate();
    }
})();
c.on('populated', function() {
    console.log('catched');
}).run();
</js>
<str text="Result">
catched
catched
</str>
</example>