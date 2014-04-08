# Exporting to JSON

<social>

You may need to export the created styles to a single JSON object. Here is how to do it:

	api
	.morph('jsonify')
	.add({
		body: {
			p: { fz: '20px'},
			a: { ted: 'n'}
		},
		'@media all and (max-width: 330px)': {
			p: { fz: '22px' }
		}
	})
	.compile(function(err, json) {
		console.log(json);
		/*

		{
			"body":{
				"p":{
					"fz":"20px"
				},
				"a":{
					"ted":"n"
				}
			},
			"@media all and (max-width: 330px)":{
				"p":{
					"fz":"22px"
				}
			}
		}

		*/
		done();
	});

If you combine the code above with [`importCSS`](/pages/api/core/#importcss-small-class-prop-values-string-small-) function you will be able to convert plain CSS to JSON.