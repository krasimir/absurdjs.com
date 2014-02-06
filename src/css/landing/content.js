module.exports = function(api) {
	api.add({
		'.landing-content': {
			bg: 'url(img/content-divider.jpg) repeat-y top center',
			pad: '30px 0 0 0',
			'@media all and (max-width: 720px)': {
				bg: 'n'
			},
			section: {
				bg: 'url(img/content-divider2.jpg) repeat-y top center',
				maw: '700px',
				mar: '0 auto 100px auto',
				cf: 'both',
				pos: 'r',
				'@media all and (max-width: 720px)': {
					bg: 'n'
				},
				'.index': {
					d: 'b',
					fz: '80px',
					lh: '80px',
					color: '#CCC',
					pos: 'a',
					top: 0,
					left: '228px',
					'@media all and (max-width: 720px)': {
						d: 'n'
					}
				},
				'.hero': {
					d: 'b',
					pos: 'a',
					top: '97px',
					left: '225px',
					'&.woman': {
						left: '244px'
					},
					'@media all and (max-width: 720px)': {
						d: 'n'
					}
				},
				'.hero-line': {
					pos: 'a',
					top: '15px',
					left: '0',
					'@media all and (max-width: 720px)': {
						d: 'n'
					}
				},
				'.description': {
					wid: '300px',
					fl: 'r',
					h2: {
						fz: '40px',
						lh: '40px',
						fw: 'n',
						mar: '0 0 20px 0',
						pad: '10px 0 0 0'
					},
					p: {
						mar: '0 0 20px 0',
						pad: 0
					},
					'@media all and (max-width: 720px)': {
						fl: 'n',
						pad: '0 30px 0 30px',
						w: 'a'
					}
				}
			}
		}
	});
}