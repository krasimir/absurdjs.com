var video = function() {
	return {
		transparent: 0,
		'-wmso-trs': 'all 2000ms',
		'video, .video-overlay': {
			pos: 'a',
			miw: '100%',
			mih: '100%',
			wid: 'auto',
			hei: 'auto'
		},
		video: {
			bottom: 0,
			right: 0,
			zin: '-1000',
			ov: 'h'
		},
		'.video-overlay': {
			bg: 'url(/public/img/landing-bg.png)'
		}
	}
}
var logo = function() {
	var wid = 60;
	return {
		d: 'b',
		wid: wid + 'px',
		pos: 'a',
		left: '50%',
		bottom: '40px',
		ml: '-' + Math.ceil(wid/2) + 'px',
		moveto: '0/300px',
		transparent: 0.4,
		'-wmso-trs': 'all 1000ms',
		'&:hover': {
			scaleto: '1.2/1.2',
			transparent: 1
		}
	}
}
var section = function() {
	var wid = 960;
	return {
		pos: 'a',
		left: '50%',
		top: '50%',
		ml: '-' + Math.ceil(wid/2) + 'px',
		mt: '-200px',
		wid: wid + 'px',
		'-wmso-trs': 'all 1000ms',
		'-wmso-trf': 'rotateY(90deg)',
		'-wmo-perspective': '400px',
		'&.home': home()
	}
}
var home = function() {
	return {
		grid: '2/div',
		'.title': {
			ta: 'r',
			h1: {
				fz: '60px',
				lh: '50px',
				ta: 'r',
				d: 'i',
				bg: '#000',
				span: {
					pos: 'r',
					color: '#FFF'
				}
			}
		},
		'.links': {
			pad: '0 0 0 40px'
		}
	}
}
module.exports = function(api) {
	api.add({
		'.landing': {
			bg: '#FFF',
			ov: 'h',
			'.video': video(),
			'.logo': logo(),
			section: section()
		}
	})
}