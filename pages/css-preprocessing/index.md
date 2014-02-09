# CSS preprocessing

AbsurdJS was started as CSS preprocessor. That's its main purpose. The idea is to compile an input to valid CSS. In the Node.js environment this could be done via the following code:

	var absurd = require("absurd")();
	absurd.add({
		body: {
			width: '100%',
			fontSize: '20px',
			'p.content': {
				lineHeight: '34px'
			}
		}
	}).compile(function(err, css) {
		console.log(css);
	});

The result is:

	body {
	  width: 100%;
	  font-size: 20px;
	}
	body p.content {
	  line-height: 34px;
	}