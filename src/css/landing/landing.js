module.exports = function(api) {
	api.add({
		'header.landing': {
			d: 'b',
			hei: '487px',
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
			}
		}
	})
}