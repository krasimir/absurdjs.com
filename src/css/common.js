module.exports = function(api) {
	api.add({
		'body, html': {
			wid: '100%',
			hei: '100%',
			pad: 0,
			mar: 0,
			fz: '18px',
			lh: '24px',
			ff: "'Open Sans', sans-serif",
			color: '#393939'
		},
		a: {
			fw: 'b',
			color: '#393939',
			td: 'n',
			'&:hover': {
				color: '#A21518',
				bdb: 'dotted 1px #999'
			}
		}
	});
}