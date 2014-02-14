absurd.component('TryIt', {
	css: {
		'.content-container': {
			maw: '100%'
		},
		'.doc-home': {
			d: 'n'
		}
	},
	ready: function() {
		if(this.qs('.jsbin-widget')) {
			this.populate();
		}
	}
})();