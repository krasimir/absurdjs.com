# Plugins

<social>

If you write a lot of CSS, you probably see a lot of patterns. Chunks of CSS which are always together and which you type again and again. Yes, the [mixins](/pages/css-preprocessing/variables-and-mixins) are one of the possible solutions, but AbsurdJS offers something better. What if you can define your own CSS property.

	api.plugin("moveit", function(api, value) {
	    value = value.split(/, ?/);
	    var x = value[0];
	    var y = value[1] || 0;
		return {
	        "-ws-transform": "translate(" + x + "," + y + ")"
	    };
	});
	api.add({
		section: {
	        moveit: '20px, 30px'   
		}
	});

We are defining a plugin called `moveit`. It returns an object which sets `transform` property. Every plugin receives a reference to the AbsurdJS's API and the value of the field. The code above is compiled to:

	section {
	  transform: translate(20px,30px);
	  -webkit-transform: translate(20px,30px);
	  -ms-transform: translate(20px,30px);
	}

As you [probably know](/pages/input-formats/) the library supports importing of pure CSS. So, you may end up with a setup which uses JavaScript only for the plugin definition and CSS for the other things. Following this approach you will continue writing CSS, but take the advantages of AbsurdJS.

	// plugins.js
	module.exports = function(api) {
		api.plugin("moveit", function(api, value) {
			value = value.split(/, ?/);
			var x = value[0];
			var y = value[1] || 0;
			return {
			    "-ws-transform": "translate(" + x + "," + y + ")"
			};
		});
	};

	// main.css
	@import "plugins.js";
	body .header nav {
		font-size: 20px;
		font-weight: bold;
		text-decoration: underline;
		moveit: 10px, -2px;
	}

And if you run `absurd -s ./main.css` in your console the result will be:

	body .header nav {
		transform: translate(10px,-2px);
		-webkit-transform: translate(10px,-2px);
		-ms-transform: translate(10px,-2px);
		font-size: 20px;
		font-weight: bold;
		text-decoration: underline;
	}