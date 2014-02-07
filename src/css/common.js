module.exports = function(api) {
	api.colors = {
		brandColor1: '#F0F0F0',
		brandColor2: '#F0F0F0'
	};
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
		},
		'code[class*="language-"], pre[class*="language-"]': {
			fz: '14px',
			lh: '20px',
			
		},
		'pre': {
			'-wm-bxsh': '0 0 2px 1px #ccc'
		}
	});
}