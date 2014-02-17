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
		wid: wid + 'px',
		pos: 'a',
		left: '50%',
		bottom: '40px',
		ml: '-' + Math.ceil(wid/2) + 'px',
		moveto: '0/300px',
		'-wmso-trs': 'all 3000ms'
	}
}
module.exports = function(api) {
	api.add({
		'.landing': {
			bg: '#FFF',
			ov: 'h',
			'.video': video(),
			'.logo': logo()
		}
	})
}