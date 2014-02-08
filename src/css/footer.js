module.exports = function(api) {
	api.add({
		footer: {
			bg: '#000',
			color: '#FFF',
			'.grid-container': {
				maw: '960px',
				mar: '0 auto',
				grid: '2/.col',
				'.col': {
					pad: '40px',
					'@media all and (max-width: 650px)': {
						fl: 'n',
						wid: '100%'
					}
				},
				hr: {
					bdt: 'none',
					bdb: 'dotted 1px #999'
				},
				a: {
					color: '#fff'
				}
			},
			'.about-the-author': {
				maw: '960px',
				mar: '0 auto',
				bdt: 'dotted 1px #999',
				ta: 'c',
				pad: '40px',
				'-wm-bxz': 'bb',
				color: '#8E8E8E',
				h3: {
					mar: 0,
					fz: '18px'
				},
				p: {
					fz: '14px',
					color: '#676767',
					a: {
						color: '#676767',
						'&:hover': {
							color: '#fff'
						}
					}
				},
				'.follow': {
					opacity: '0.5',
					'&:hover': {
						opacity: 1
					}
				}
			}
		}
	});
}