module.exports = function(api) {
	api.add({
		'.quick-tips': {
			'&.second-color': {
				bg: api.colors.brandColor2	
			},
			bdb: 'solid 1px ' + api.darken(api.colors.brandColor2, 10),
			bg: api.colors.brandColor1,
			ta: 'c',
			pad: '30px 0 30px 0',
			h3: {
				mar: '0 0 40px 0',
				pad: 0,
				fw: '800',
				fz: '30px',
				'&:before': {
					content: '" "',
					d: 'ib',
					wid: '50px',
					hei: '20px',
					mar: '0 20px 10px 0',
					bdb: 'dotted 1px #000'
				},
				'&:after': {
					content: '" "',
					d: 'ib',
					wid: '50px',
					hei: '20px',
					mar: '0 0 10px 20px',
					bdb: 'dotted 1px #000'
				}
			},
			'.grid-container': {
				mar: '0 auto',
				maw: '960px',
				grid: '2/div',
				div: {
					p: {
						pad: 0,
						mar: '20px 0 20px 0'
					},
					ta: 'le',
					pre: {
						mar: '0 0 20px 0'
					},
					img: {
						d: 'b',
						hei: '27px',
						margin: '0 auto 20px auto'
					},
					pad: '20px',
					'@media all and (max-width: 750px)': {
						fl: 'n',
						wid: '100%'
					}
				}
			}			
		}
	})
}