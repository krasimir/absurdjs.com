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
				fz: '36px',
				lh: '40px'
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
				pad: '20px 0 20px 0',		
				grid: '2/a',
				a: {
					fz: '26px',
					d: 'b',
					'&:hover': {
						bdb: 'n'
					},
					'&:nth-child(2)': {
						ta: 'r'
					}
				}
			},
			blockquote: {
				bdl: 'solid 4px #999',
				pad: ' 0 0 0 20px',
				mar: 0,	
				p: {
					color: '#999'
				}
			},
			table: {
				bdsp: 0,
				td: {
					bdt: 'solid 1px #B3B3B3',
					bdl: 'solid 1px #B3B3B3',
					pad: '6px',
					'word-wrap': 'break-word'
				}
			},
			'.example': {
				grid: '2/.col',
				'.col:nth-child(1)': {
					pad: '0 10px 0 0'
				},
				'.col:nth-child(2)': {
					pad: '0 0 0 10px'
				},
				'.col': {
					small: {
						color: '#DDDDDD'
					},
					'@media all and (max-width: 600px)': {
						fl: 'n',
						wid: '100%'
					}
				}
			},
			'.prop-values': {
				color: '#999',
				fw: 'n'
			}
		}
	});
}