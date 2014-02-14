# Events

<social>

While you develop a JavaScript application into the browser you are dealing with two types of events - DOM events triggered by elements on the page and events dispatched by objects into your code logic. Let's see how everything works in AbsurdJS.

## Catching DOM events

If you want to listen for events triggered by particular DOM element you have to add a `data-absurd-event` attribute. The value should contain the name of the event and a name of a function into your component.

<example>
<html>
&lt;div class="content">
&lt;a data-absurd-event="click:linkClicked" href="#">
	click me
&lt;/a>
&lt;/div>
</html>
<js>
absurd.component("ComponentName", {
    html: '.content',
    linkClicked: function(e) {
        alert("clicked");
    },
    constructor: function() {
        this.populate();
    }
})();
</js>
</example>

<small class="jsbin"><i class="fa fa-code"></i> [](http://jsbin.com/hajos/1/edit)</small>

You may event send parameters to the function which is called. Just add another `:` and append your values. Notice that the first argument of the handler is always an [Event object](https://developer.mozilla.org/en-US/docs/Web/API/Event). That's the object which you normally get when you add event listeners with vanilla JavaScript.

<example>
<html>
&lt;div class="content">
&lt;a data-absurd-event="click:linkClicked:20:30" href="#">
	click me
&lt;/a>
&lt;/div>
</html>
<js>
absurd.component("ComponentName", {
    html: '.content',
    linkClicked: function(e, a, b) {
        alert("clicked " + a + " " + b);
    },
    constructor: function() {
        this.populate();
    }
})();
</js>
</example>

You could even do a crazy things like adding a template expression in the attribute. For example, if the name of the handler depends on a variable inside the component.

	<div class="content">
	    <a href="#" data-absurd-event="click:clicked<% this.status %>">
	    	click me
	    </a>
	</div>

## Handling custom events

As we said earlier in this documentation every AbsurdJS component is actually an event dispatcher.

	var menu = absurd.component("MenuClass", {
	    openMenu: function() {
	        this.dispatch("opened", {width: 42});
	    }
	})();
	menu.on("opened", function(data) {
	    console.log(data.width);
	});
	menu.openMenu();

There are `on`, `off` and `dispatch` methods implemented. The example above shows how to trigger a custom event and attach some data to it.

Sometimes you need to listen for event inside the same component. In such cases you don't need to use the `on` method. It is enough to define a function with the same name as the event. This solves the well known problem with the scope. I.e. the `this` keyword inside the handler points to the component itself.

	var menu = absurd.component("MenuClass", {
	    opened: function(data){
	        console.log(this.__name, data.width);
	        // MenuClass 42
	    },
	    openMenu: function() {
	        this.dispatch("opened", {width: 42});
	    }
	})();
	menu.on("opened", function(data) {
	    console.log(this.__name, data.width);
	    // undefined 200
	});
	menu.openMenu(); 

## Built-in events

Here is the place where we should mention the build-in events, which are fired by default from the component.

### ready

The `ready` event is triggered when the document is fully loaded. That's the same as jQuery's `ready` method.

	absurd.component('Component', {
		ready: function() {
			// page is loaded
		}
	})();

The code for this event is:

	if (document.addEventListener) {
		document.addEventListener('DOMContentLoaded', fn);
	} else {
		document.attachEvent('onreadystatechange', function() {
			if (document.readyState === 'interactive') {
				fn();
			}
		});
	}

Where `fn` dispatches the event.

### populated

The `populated` event is dispatched when the `populate` method finishes its job.

<example>
<js>
var c = absurd.component("Component", {
    html: {
        div: 'Test'
    }
})();
c.on('populated', function() {
    console.log('population done');
});
c.populate();
</js>
<js>
absurd.component("Component", {
    html: {
        div: 'Test'
    },
    populated: function() {
        console.log('population done');
    }
})().populate();
</js>
</example>

## Sending an event to all the created components

There are cases where you want to notify all the components for something. Here is how to do it:

	absurd.component("ComponentA", {
        somethingHappens: function(data) {
            console.log(data.someData);
        }
    })();
    absurd.component("ComponentB", {
        somethingHappens: function(data) {
            console.log(data.someData);
        }
    })();
    
    absurd.components.broadcast("somethingHappens", {
        someData: 'someValue'
    });

That's how the `ready` event is send. Of course it is not mandatory to pass any data.

## Sending messages from one component to another

The last thing about the events in AbsurdJS is sending them from one component to another. This could be really powerful, because you are able to wire the whole page and still have the things split in different components. 

    var a = absurd.component("ComponentA", {
        ohYeah: function() {
            console.log("Oh ... yeah!");
        }
    })();
    var b = absurd.component("ComponentB", {
        doIt: function() {
            this.dispatch('ohYeah');
        }
    })();
    a.wire('ohYeah');
    b.doIt();

There is a global event bus where all the messages are sent. Once the event is trigged you are able to bind it to every component. That's what happen when we use the `wire` method. You have also an access to the bus which actually implements the usual event dispatcher class.

	var a = absurd.component("ComponentA", {
        ohYeah: function() {
            console.log("Oh ... yeah!");
        }
    })();
    var b = absurd.component("ComponentB", {
        doIt: function() {
            this.dispatch('ohYeah');
        }
    })();
    
    // absurd.components.events = global event bus
    absurd.components.events.on('ohYeah', function() {
        console.log('I got it.');
    });
    
    a.wire('ohYeah');
    b.doIt();

<small class="jsbin"><i class="fa fa-code"></i> [](http://jsbin.com/xikem/9/edit?js,console)</small>
