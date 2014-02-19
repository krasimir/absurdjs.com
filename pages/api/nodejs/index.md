# Node.js API

<social>

## add ( <small class="prop-values">object</small> )

> Adds data for compilation.
	
    api.add({
        body: { 
            padding: 0 
        }
    });

## import ( <small class="prop-values">string | [string, string, ...]</small> )

> AbsurdJS supports importing of JavaScript, JSON, YAML and CSS files.

	module.exports = function(api) {
	    api.import(__dirname + '/config/sizes.js');
	    api.import([
	        __dirname + '/config/colors.js',
	        __dirname + '/config/sizes.js'
	    ]);
	}

## storage ( <small class="prop-values">key, value</small> )

<example>
<str text="Setting value">
api.storage("mixin", function(px) { 
    return {
        fontSize: px + 'px'
    }
});
</str>
<str text="Getting value">
api.add({
    body: [
        api.storage("mixin")(18)
    ]
});
</str>
</example>

## plugin ( <small class="prop-values">name of property, function</small> )

> The plugin's function accepts two arguments. The first one is a reference to the API and second one is the value of the CSS property.

	api.plugin('my-custom-gradient', function(api, colors) {
	    return {
	        background: 'linear-gradient(to bottom, ' + colors.join(", ") + ')'
	    };
	});

## darken ( <small class="prop-values">color, percents</small> )

	api.add({
        body: {
            color: api.darken('#BADA55', 25)
        }
    });

## lighten ( <small class="prop-values">color, percents</small> )

	api.add({
        body: {
            color: api.lighten('#BADA55', 25)
        }
    });

## raw ( <small class="prop-values">string</small> )

	 api.raw('/* comment here */');

## rawImport ( <small class="prop-values">string | [string, string, ...]</small> )

	api.rawImport(['bootstrap-responsive.css', 'bootstrap.css']);

## compile  ( <small class="prop-values">function, options</small> )

<example>
<str text="Example">
api.compile(function(err, result) {
	// ...
}, {});
</str>
<str text="Default options">
{
	combineSelectors: true,
	minify: false,
	processor: [internal CSS preprocessor],
	keepCamelCase: false
}
</str>
</example>

## compileFile  ( <small class="prop-values">path to file, function, options</small> )

> Check `compile` method for details about the `options`.

	api.compileFile("css/styles.css", function(err, result) {
		// ...
	}, {});

## hook ( <small class="prop-values">method function</small> )

> If your hook handler returns `true` the default method behaviour is skipped.

	api.hook("add", function(rules, stylesheet) {
		// write your logic here
		return true;
	});

## register ( <small class="prop-values">method, function</small> )

> Create your own API function.

	api.register("toJSON", function(callback) {
		// your custom code here
	})

## morph ( <small class="prop-values">type</small> )

> `type` could be `html` or `component`. Check out [HTML preprocessing](/pages/html-preprocessing) for more information.

<example>
<str text="HTML preprocessing">
api.morph("html").add({
	html: {
		head: {
			title: "AbsurdJS is awesome"
		}
	}
}).compile(function(err, html) {
	// &lt;html>
	//	&lt;head>
	//		&lt;title>AbsurdJS is awesome&lt;/title>
	//	&lt;/head>
	// &lt;/html>
})
</str>
<str text="Components preprocessing">
api.morph("component").add({
    css: {
		".page": {
           display: 'block' 
		}
	},
	html: {
		'section.page': {
			h2: "That's a page"
		}
	}
}).compile(function(err, css, html) {
    /\*
	css = .page {
	  display: block;
	}
	html = &lt;section class=\"page\">
		&lt;h2>That's a page&lt;/h2>
	&lt;/section>"
    \*/
})
</str>
</example>