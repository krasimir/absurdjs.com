# CSS compilation

AbsurdJS was started as CSS preprocessor. And because it is written in plain JavaScript it was easy to be ported for browser usage. The [CSS compilation](/pages/css-preprocessing/) processes are the same as in the Node.js version of the library. You should use JSON as an input and define it in `css` property of the component.

	absurd.component("ComponentName", {
        css: {
            '.content': {
                background: '#BADA55'
            },
            span: {
                fontWeight: 'bold',
                textDecoration: 'underline'
            }
        },
        constructor: function(name) {
            this.populate();
        }
    })();

Before to call the `populate` method your CSS is not compiled and it is not applied to the page. During the population a new `<style>` tag is created and inserted into the DOM. You may update the value of the `css` property and call again `populate`. The styles will be updated. Have in mind that what AbsurdJS is doing is to define CSS which is valid for the whole page. It's not like changing the `style` attribute of an element, but it's like changing the stylesheets dynamically.

Let's use the above component with the following HTML:

	<div class="content">
	    Sample <span>text</span>
	</div>
	<section>
	    Another <span>text</span>.
	</section>

After the CSS compilation the both `span` tags get the styles applied.

<a class="jsbin-embed" href="http://jsbin.com/fojey/4/embed?js,output">JS Bin</a><script src="http://static.jsbin.com/js/embed.js"></script>

Don't forget that you can use [Organic CSS](/pages/css-preprocessing/organic-css). All the [atoms](/pages/css-preprocessing/organic-css/atoms) and [molecules](/pages/css-preprocessing/organic-css/molecules) are available. For example:

	absurd.component("ComponentName", {
	    css: {
	        '.content': {
	            bg: '#BADA55',
	            fz: '20px',
	            moveto: '20px/20px'
	        }
	    },
	    constructor: function(name) {
	        this.populate();
	    }
	})();

Which produces the following `<style>` tag:

	<style id="ComponentName-css" type="text/css">
		.content {
			background: #BADA55;
			font-size: 20px;
			transform: translate(20px,20px);
			-webkit-transform: translate(20px,20px);
			-ms-transform: translate(20px,20px);
		}
	</style>
	
<small class="jsbin"><i class="fa fa-code"></i> [](http://jsbin.com/hutiy/1/edit)</small>

