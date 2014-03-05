# Basics

<social>

The library was started as JavaScript to CSS compiler. So, the main input format is JavaScript. Every object defines a selector. Every property of that object could be a property and its value or another object. For example:

	{
	    body: {
	        marginTop: '20px',
	        padding: 0
	    }
	}

`body` is a CSS selector, `marginTop` and `padding` are CSS properties.

## Nesting

As many other preprocessors, AbsurdJS also supports nesting.

	{
		body: {
			marginTop: '20px',
			width: '100%',
	        header: {
	            width: '200px',
	            p: {
	                fontSize: '20px'
	            }
	        }
		}	
	}

The result of the this code snippet is:

	body {
	  margin-top: 20px;
	  width: 100%;
	}
	body header {
	  width: 200px;
	}
	body header p {
	  font-size: 20px;
	}

## The problem with quoting

As you may guess, you need to use a lot of quotes in your code. Otherwise the JavaScript will invalid. That's especially valid for the values of the properties. Except the cases where the value is just an integer you should wrap everything into quotes. However, you don't need to do that for the name of the properties. There is a logic which converts every uppercase letter to a dash followed by its lowercase version.

	marginTop -> margin-top
	fontSize -> font-size
	WebkitTransition -> -webkit-transition

## Browser vendor prefixes

That's one of the big benefits of the CSS preprocessors. You don't have to think about the prefixes for the different browser. AbsurdJS has plugins which solve the same problem. However this functionality is not part of the library's core. There is something which you may use if you don't rely on a plugin.

	header: {
        '-wmso-animation': 'slide'
    }

`w` is for `webkit`, `m` is for `moz`, `s` is for `ms`, `o` is for Opera's prefix.

	header {
		animation: slide;
		-webkit-animation: slide;
		-moz-animation: slide;
		-ms-animation: slide;
		-o-animation: slide;
	}

Of course you may skip some of the prefixes and use only some of them, like `-w-transition: all 300ms` produces:

	transition: all 300ms;
	-webkit-transition: all 300ms;

For adding all the prefixes you may use just a single dash `-`.

> The described functionality is part of [Organic](/pages/css-preprocessing/organic-css) framework. For the Node.js version of the library is added by default, but for the client-side port you need to include it additionally.

## Pseudo classes

The pseudo classes are defined as every other property. They should be nested into the element. For example:

	a: {
        textDecoration: 'none',
        ':hover': {
            color: '#BADA55'
        },
        ':after': {
            content: '"<"'
        }
	}

The result is:

	a {
	  text-decoration: none;
	}
	a:hover {
	  color: #BADA55;
	}
	a:after {
	  content: "<";
	}

## Ampersand operator

The ampersand operator is a pointer to the wrapper. I.e. if you need to write a selector containing the parent one you may use `&` sign.

	a: {
        textDecoration: 'none',
        '& span, &.active': {
            color: 'blue'
        }
	}

Notice that you may use it as many times as you want. Even to create a decorator class of the parent selector. Like in the example above we are defining styles for the nested `span` element, but also for an `.active` version of the link.

	a {
	  text-decoration: none;
	}
	a span, a.active {
	  color: blue;
	}

## Putting something in the beginning of the generated selector

Very often you need to add a little hack and apply a CSS rule only for specific browser or version of the application. It's a common practice to add a class on the very top element (like `body`). For example:

	p a {
		margin-top: 22px;
	}
	.android p a {
		margin-top: 24px;
	}

That's easy doable with AbsurdJS. I.e.:

	section: {
    	a: {
            fontSize: '12px',
            '^.ie': {
                fontSize: '22px'
            }
    	},
        p: {
            lineHeight: '30px',
            '^.ie': { lineHeight: '32px' },
            '^.mobile': { background: '#999' }
        }
    }

The compiled CSS:

	section a {
	  font-size: 12px;
	}
	.ie section a {
	  font-size: 22px;
	}
	section p {
	  line-height: 30px;
	}
	.ie section p {
	  line-height: 32px;
	}
	.mobile section p {
	  background: #999;
	}

It's always nice to keep your code well structured and define those custom styles together with the main definitions.

## Using an array as value

Very often you will compose the styles by using external modules or functions. Having this in mind you should know that you may use arrays. 

	var a = {
		fontSize: '12px'
	}
	var b = {
		margin: '10px'
	}
	api.add({
		body: [a, b]
	});

Produces:

	body {
	  font-size: 12px;
	  margin: 10px;
	}

## Using classify property

There are cases where you want to send an object as a value, but don't want to be compiled as a nested element. In such cases you may use the `classify` property. For example:

<example>
<js>
var px = function(value) {
    return {
        classify: true,
        add: function(num) { 
        	value += num; return this; 
        },
        remove: function(num) { 
        	value -= num; return this; 
        },
        toString: function() { 
        	return value + 'px';
        }
    };
};
var size = function(w, h) {
    return {
        classify: true,
        toJSON: function() {
            return {
                width: w + 'px',
                height: h + 'px'
            };
        }
    };
};
absurd.add({
    body: {
        width: px(60).add(20).remove(10),
        section: size(950, 200)
    }
}).compile(function(err, css) {
    console.clear();
    console.log(css);
});
</js>
<css>
body {
  width: 70px;
}
body section {
  width: 950px;
  height: 200px;
}
</css>
</example>	

AbsurdJS uses the `toString` or `toJSON` function of the passed object (if any) to retrieve the result.

<small class="jsbin"><i class="fa fa-code"></i> [](http://jsbin.com/paqegexe/13/edit?js,console)</small>