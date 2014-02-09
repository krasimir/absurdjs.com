# Media queries and raw data

The media queries are defined inside the selectors. They are nested properties. For example:

	api.add({
		section: {
	        width: '250px',
	        '@media all and (max-width: 700px)': {
	            width: '120px'
	        }
		},
	    footer: {
	        p: {
	            '@media all and (max-width: 700px)': {
	                fontSize: '20px'
	            },
	            '@media all and (max-width: 500px)': {
	                fontSize: '12px'
	            }
	        }
	    }
	});

AbsurdJS compiles the code above to:

	section {
	  	width: 250px;
	}
	@media all and (max-width: 700px) {
		section {
		  	width: 120px;
		}
		footer p {
		  	font-size: 20px;
		}
	}
	@media all and (max-width: 500px) {
		footer p {
		  	font-size: 12px;
		}
	}

It combines the matching media queries into one definition, which saves some bytes. It also put them at the end of the file.