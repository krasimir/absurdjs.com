# HTML compilation

In the context of Node.js the AbsurdJS's [HTML preprocessing](/pages/html-preprocessing/) is just saving markup to a file. However in the browser is much more. It's creating a new DOM element or fetching one from the current page. And because it has template engine integrated you are able to fill the HTML with data. All you have to do is to use the `html` property of the class and call its `populate` method.

	absurd.component("ComponentName", {
	    html: {
	        'header': {
	            'a[href="http://absurdjs.com/"]': 'AbsurdJS'
	        }
	    },
	    constructor: function(name) {
	        this.populate();
	        console.log(this.el.outerHTML);
			document.querySelector('body').appendChild(this.el);
	    }
	})();

The result of the above snippet is a new `<header>` tag added to the `<body>` of the page. Once you call the `populate` method the `el` property is filled and it is pointing to the newly created DOM element.

There are projects where you want to work with already existing elements. If that's the case then the value of the `html` property should be a selector. String matching your DOM element through `querySelector` method.

<example>
<html>
&lt;div class="content">
    &lt;p>Option A&lt;/p>
    &lt;p>Option B&lt;/p>
&lt;/div>
</html>
<js>
absurd.component("ComponentName", {
    html: '.content p:nth-child(2)',
    constructor: function(name) {
        this.populate();
        this.el.innerHTML = 'New text.';
    }
})();
</js>
</example>

<small class="jsbin"><i class="fa fa-code"></i> [](http://jsbin.com/zazat/2/edit)</small>

The code changes `Option B` to `New text.`.

## Using expressions

Ok, we saw how to get an access to a DOM element (`this.el`). Now let's see how to populate the HTML with data.

The AbsurdJS's [template engine](http://krasimirtsonev.com/blog/article/Javascript-template-engine-in-just-20-line) accepts expressions in `<% ... %>`. The content inside is not something special which you have to learn. It's pure JavaScript. For example:

<example>
<html>
&lt;div class="content">
    &lt;p>&lt;% this.text %>&lt;/p>
&lt;/div>
</html>
<js>
absurd.component("ComponentName", {
    html: '.content',
    text: 'Wow ... it works!',
    constructor: function() {
        this.populate();
    }
})();
</js>
</example>

<small class="jsbin"><i class="fa fa-code"></i> [](http://jsbin.com/xaguj/1/edit)</small>

If you dig a bit in the code of the library you will see that the template engine constructs a JavaScript function, which is later executed. In the example above, the code looks like that:

    var r=[];
    r.push("<div class=\"content\">    <p>");
    r.push( this.text );
    r.push("</p></div>");
    return r.join("");

So our expression is directly run as a valid JavaScript in the context of the current component. That's why we need `this` keyword in front of the variable. It simply points to our component. This means that you could do a lot of things like for loops, filters or computed properties. Here is a little bit more advanced snippet.

<example class="rows">
<html>
&lt;div class="content">
    &lt;h1>&lt;% this.getName().toUpperCase() %>&lt;/h1>
    &lt;ul class="features">
        &lt;% for(var i=0; i&amp;lt;this.features.length; i++) { %>
        &lt;% var feature = this.features[i]; %>
        &lt;li class="&lt;% feature.active ? 'available' : 'missing' %>">
            &lt;% feature.label %>
        &lt;/li>
        &lt;% } %>
    &lt;/ul>
&lt;/div>
</html>
<js>
absurd.component("ComponentName", {
    css: {
        '.content': {
            '.available': { color: '#009f00' },
            '.missing': { color: '#9f0000', ted: 'l' }
        }
    },
    html: '.content',
    name: 'AbsurdJS JavaScript',
    getName: function() {
        return this.name;
    },
    features: [
        { label: 'CSS preprocessing', active: true },
        { label: 'HTML preprocessing', active: true },
        { label: 'Organic CSS', active: true },
        { label: 'jQuery dependency', active: false }
    ],
    constructor: function() {
        this.populate();
    }
})();
</js>
</example>

<small class="jsbin"><i class="fa fa-code"></i> [](http://jsbin.com/pomev/8/edit)</small>

If you are curious about the code running through the template engine:

    var r=[];
    r.push("<div class=\"content\">    <h1>");
    r.push( this.getName().toUpperCase() );
    r.push("</h1><ul class=\"features\">    "); 
    for(var i=0; i<this.features.length; i++) { 
    r.push("            "); 
    var feature = this.features[i]; 
    r.push("            <li class=\"");
    r.push( feature.active ? 'available' : 'missing' );
    r.push("\">                ");
    r.push( feature.label );
    r.push("            </li>"); 
    } 
    r.push("</ul></div>");
    return r.join(""); 

Also notice that we escaped the `<` sign in the for loop. I.e. we used `i&lt;this.features.length;` instead of `i<this.features.length`. That's because while we are converting the DOM element to a string  the browser interpolates such symbols as part of nodes and it mess up our logic. So, have this in mind while you write crazy JavaScript inside the HTML as an expression.