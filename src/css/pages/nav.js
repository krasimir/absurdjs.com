module.exports = function(api) {
	api.add({
		'.content-nav': {
			cf: 'after',
			pad: 0,
			mar: 0,
			bdb: 'dotted 1px #999',
			mah: '84px',
			ul: {
				lis: 'n',
				pad: 0,
				mar: 0,
				li: {
					pad: 0,
					mar: 0,
					a: {
						pad: '30px',
						d: 'ib',
						opacity: '0.5',
						ov: 'h',

						'&:hover': {
							opacity: 1,
							bdb: 'n',
							span: {
								moveto: '0/0',
								opacity: 1
							}
						},
						span: {
							'-w-trs': 'all 400ms',
							d: 'ib',
							moveto: '0/-60px',
							opacity: 0,
							'@media all and (max-width: 280px)': {
								d: 'n'
							}
						}
					}
				}
			}
		},
		'.sitemap': {
			bg: '#000',
			color: '#FFF',
			'-w-trs': 'all 600ms',
			'z-index': 100,
			'.close': {
				hei: '84px',
				bdb: 'dotted 1px #999',
				mar: '0 0 20px 0',
				a: {
					fz: '30px',
					d: 'ib',
					color: '#999',
					fl: 'r',
					mar: '30px 25px 0 0',
					'&:hover': {
						bdb: 'n',
						color: '#fff'
					}
				}
			},
			ul: {
				mar: '0 0 0 22px',
				pad: 0,
				lis: 'n'
			},
			a: {
				color: '#FFF'
			}
		}
	})
}