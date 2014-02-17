absurd.component('LandingVideo', {
	html: '.landing .video',
	ready: function() {
		this.verify(function() {			
			var videoTag = this.populate().qs('video'), self = this;
			this.addEventListener(videoTag, 'playing', function() {
				self.applyCSS({ transparent: 1 })
			});
			videoTag.load();
		});
	}
})();

absurd.component('LandingLogo', {
	html: '.landing .logo',
	ready: function() {
		this.verify(function() {
			var self = this;
			setTimeout(function() {
				self.applyCSS({
					moveto: '0/0'
				});	
			}, 100)
			
		});
	}
})();