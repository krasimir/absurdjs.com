# Extending

We already convered the [plugins](/pages/css-preprocessing/plugins). That's how you may extend AbsurdJS and define your own CSS properties. You may also create your own API methods:

	api.register("buttonize", function(selector) {
		var styles = {};
		styles[selector] = {
			cursor: "pointer",
			display: "block",
			background: "#aaa",
			":hover": {
				background: "#ddd"
			}
		};
		api.add(styles);
	});
	api.buttonize(".header a");

`buttonize` is a method which in the above example generates:

	.header a {
	  cursor: pointer;
	  display: block;
	  background: #aaa;
	}
	.header a:hover {
	  background: #ddd;
	}

Every API method could be overwritten. You are able to run your own function instead of the original one. If your method returns `true` then the default behaviour of the method is suppressed and only your implementation works.

	api.hook("add", function(rules) {	
		if(rules.grid) {
			var styles = {};
			styles[rules.grid.parent] = parentStyles = {
				":after": {
					display: "table",
					content: "",
					clear: "both"
				}
			};
			parentStyles[rules.grid.child] = {
				width: (100 / rules.grid.columns) + "%",
				float: "left"
			};
			api.add(styles);
			return true;
		}
	});
	api.add({
		grid: {
			parent: ".header .menu",
			child: ".link",
			columns: 4
		}
	});

And the result is:

	.header .menu:after {
	  display: table;
	  content: "";
	  clear: both;
	}
	.header .menu .link {
	  width: 25%;
	  float: left;
	}