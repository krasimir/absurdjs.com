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
			h3: {
				fz: '36px',
				lh: '40px',
				fw: 'n'
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
						color: '#AAAAAA'
					},
					'@media all and (max-width: 600px)': {
						fl: 'n',
						wid: '100%'
					}
				}
			},
			'.example-rows': {
				'.col:nth-child(2), .col:nth-child(1)': {
					pad: 0
				},
				'.col': {
					fl: 'n',
					wid: '100%'
				}
			},
			'.prop-values': {
				color: '#999',
				fw: 'n'
			},
			'.doc-home': {
				wid: '40px',
				pos: 'a',
				left: '50%',
				top: '105px',
				ml: '-431px',
				opacity: '0.2',
				fz: '30px',
				'-w-trs': 'all 700ms',
				'&:hover': {
					opacity: 1,
					bdb: 'n'
				},
				'@media all and (max-width: 960px)': {
					d: 'n'
				}
			},
			'.documentation-sitemap': {
				ul: {
					lis: 'n',
					li: {
						'a:before': {
							content: '"» "'
						}
					}
				}
			},
			'.jsbin': {
				fz: '14px',
				d: 'b',			
				bg: '#FFF',
				a: { color: '#999' },
				ov: 'h',
				'&:before': {
					content: '" "',
					d: 'b',
					wid: '100%',
					bdt: 'solid 1px #DADADA',
					moveto: '237px/19px'
				},
				'a:after': {
					content: '"Check out the example in JSBin"'
				}
			},
			'.social': {
				'.twitter-share-button': {
					wid: '80px !important'
				},
				'[id^=___plusone]': { 
					width: '59px !important'
				},
				'.fb-like': {
					moveto: '0/-5px'
				},
				'.github-stars': {
					width: '86px !important'	
				}
			},
			'.jsbin-widget': {
				iframe: {
					hei: '600px'
				}
			}
		}
	});
}