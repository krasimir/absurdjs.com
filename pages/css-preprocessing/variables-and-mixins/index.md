# Variables and Mixins

<social>

You don't have to do anything special. That's because you use JavaScript and the language supports variables by default. And not only that, you are able to use loops, conditional statements, functions etc ...

	var brandColor = "#00F";
	var size = function(w, h) {
	    return {
	        width: w,
	        height: h
	    }
	}
	api.add({
		header: [
			{ color: brandColor },
	        size('900px', '245px')
		]
	});

You are free to use whatever you know about JavaScript. What it matters is the final object passed to AbsurdJS's API. As you can see above, we are defining a variable `brandColor` and a mixin `size` and the result is:

	header {
	  color: #00F;
	  width: 900px;
	  height: 245px;
	}