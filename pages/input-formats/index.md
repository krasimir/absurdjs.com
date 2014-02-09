# Input formats

## Node.js modules

To add something for compilation you need to use the AbsurdJS's API. However, you can't add everything into one file. You could split your logic into different files and import them one by one. For example:

	// header.js
	module.exports = function(api) {
		api.add({
			'.header': {
				marginTop: '10px'
			}
		});
	}

	// main.js
	module.exports = function(api) {
		api.add({
			body: {
				background: '#000'
			}
		}).import([__dirname + '/header.js']);
	}

If you compile `main.js` from the command line with `absurd -s ./main.js` you will get:

	body {
	  background: #000;
	}
	.header {
	  margin-top: 10px;
	}

## JSON, CSS and YAML

The library accepts not only JavaScript files, but JSON, normal CSS or YAML files.

	// header.js
	module.exports = function(api) {
		api.add({
			'.header': {
				marginTop: '10px'
			}
		});
	}

	// footer.json
	{
		".footer": {
			"span": {
				"fontSize": "20px",
				"marginTop": "10px",
				"background": "#000"
			}
		}
	}

	// links.css
	a {
		color: #003;
		text-decoration: none;
	}
	a:hover {
		color: #009;
	}

	// base.yaml
	---
	body:
	  margin: 0
	  padding: 0
	  fontSize: 1em

Having all these files you may write the following:

	// main.js
	module.exports = function(api) {
		api.import([
			__dirname + '/header.js',
			__dirname + '/footer.json',
			__dirname + '/links.css',
			__dirname + '/base.yaml'
		]);
	}

The compilation of `main.js` will produce the following result:

	.header, .footer span {
	  margin-top: 10px;
	}
	.footer span {
	  font-size: 20px;
	  background: #000;
	}
	body {
	  font-size: 1em;
	  margin: 0;
	  padding: 0;
	}
	a {
	  color: #003;
	  text-decoration: none;
	}
	a:hover {
	  color: #009;
	}

	