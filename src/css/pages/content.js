module.exports = function(api) {
	api.add({
		'.content': {
			'-w-trs': 'width 600ms',
			'z-index': 50,
		},
		'.content-container': {
			pos: 'r',
			maw: '740px',
			mar: '0 auto',
			padding: '30px',
			h1: {
				fz: '60px',
				lh: '60px',
				pad: '0 0 20px 0',
				mar: '50px 0 30px 0',
				bdb: 'solid 8px ' + api.colors.brandColor1
			},
			h2: {
				fz: '36px'
			},
			p: {
				fz: '24px',
				lh: '34px'
			},
			hr: {
				bdb: 'n',
				bdt: 'solid 4px ' + api.colors.brandColor1
			},
			'.guide': {
				grid: '2/a',
				a: {
					d: 'b',
					'&:hover': {
						bdb: 'n'
					},
					'&:nth-child(2)': {
						ta: 'r'
					}
				}
			}
		}
	});
}