module.exports = function(api) {
	api.add({
		'header.landing': {
			d: 'b',
			hei: '100%',
			bg: '#000 url(img/landing-background.jpg) no-repeat top center',
			cf: 'both',
			'.container': {
				maw: '730px',
				mar: '0 auto',
				pad: '88px 0 0 0',
				'@media all and (max-width: 730px)': {
					pad: 0,
					ta: 'c'
				}
			},
			h1: {
				ff: "'Open Sans', sans-serif",
				fz: '56px',
				lh: '50px',
				color: '#FFF',
				mar: 0,
				pad: '66px 0 0 0',
				tt: 'u',
				fw: 800,
				fl: 'l',
				'@media all and (max-width: 730px)': {
					fl: 'n',
					pad: '20px 0 0 0'
				},
				'@media all and (max-width: 440px)': {
					fz: '32px',
					lh: '32px',
					pad: '48px 0 0 0'
				}
			},
			img: {
				d: 'b',
				fl: 'r',
				wid: '278px',
				'@media all and (max-width: 730px)': {
					fl: 'n',
					d: 'ib',
					ml: '-32px',
				},
				'@media all and (max-width: 250px)': {
					wid: '220px'
				}
			},
			nav: {
				cf: 'both',
				ul: {
					mar: 0,
					pad: 0,
					lis: 'n',
					li: {
						mar: '0 0 14px 0',
						pad: 0,
						a: {
							color: api.darken('#fff', 30),
							fz: '24px'		
						},
						'i.fa': {
							wid: '26px',
							color: api.darken('#fff', 30)
						},
						hr: {
							bdb: 'n',
							bdt: 'dotted 1px ' + api.darken('#fff', 70)	
						},
						'.github-stars': {
							fl: 'r',
							d: 'b',
							mar: '2px -14px 0 0',
							opacity: '0.5',
							'&:hover': {
								opacity: 1
							}
						}
					}
				}
			}
		}
	})
}