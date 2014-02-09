# HTML preprocessing

AbsurdJS could also act as a HTML preprocessor. It needs the calling of only one method `morph`.

	api.morph("html").add({
		body: {
			'section.content#home': {
				nav: [
					{ 'a[href="#" class="link"]': 'A' },
					{ 'a[href="#" class="link"]': 'B' },
					{ 'a[href="#" class="link"]': 'C' }
				]
			},
			footer: {
				p: 'Text in the Footer'
			}
		}
	}).compile(function(err, html) {
		console.log(html);
	});

Every property defines a tag. The attributes of the tag could be defined in `[...]` as it is shown above. The HTML markup produced by the example is:

	<body>
	    <section class="content" id="home">
	        <nav>
	        	<a href="#" class="link">A</a>
	        	<a href="#" class="link">B</a>
	        	<a href="#" class="link">C</a>
	        </nav>
	    </section>
	    <footer>
	        <p>Text in the Footer</p>
	    </footer>
	</body>

Normally while you are generating HTML layouts you want to fill them with data. That's why AbsurdJS has its own template engine integrated. Let's check the following code:

	var data = {
		name: 'AbsurdJS',
		features: ['CSS preprocessor', 'HTML preprocessor', 'Organic CSS'],
		link: function() {
			return '<a href="http://absurdjs.com">' + this.name + '</a>';
		}
	}
	api.morph("html").add({
		body: {
			h1: 'I\'m <% this.name %>!',
			section: {
				ul: [
					'<% for(var i=0; i<this.features.length; i++) { %>',
					{ li: '<% this.features[i] %>' },
					'<% } %>'
				]
			},
			footer: 'Checkout my website at <% this.link() %>'
		}
	}).compile(function(err, html) {
		console.log(html);
	}, data);

The generated HTML markup:

	<body>
	    <h1>I'm AbsurdJS!</h1>
	    <section>
	        <ul>
	            <li>CSS preprocessor</li>
	            <li>HTML preprocessor</li>
	            <li>Organic CSS</li>
	        </ul>
	    </section>
	    <footer>Checkout my website at <a href="http://absurdjs.com">AbsurdJS</a>
	    </footer>
	</body>

The dynamic parts and the instructions to the template engine are passed between `<%` and `%>` strings. The interesting thing is that there is no special syntax that you should learn. That's just a JavaScript. The code which you put there is executed in the context of the passed `data`. As you can see you may access a variable directly, create a *for* loop or even execute a function. 

> More about the engine and how it is implemented [here](http://krasimirtsonev.com/blog/article/Javascript-template-engine-in-just-20-line). 