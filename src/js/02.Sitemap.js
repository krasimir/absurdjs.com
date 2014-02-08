absurd.component("SiteMap", {
	sitemapWidth: 400,
	html: '.sitemap',
	css: {
		'.sitemap': {
			wid: '0px',
			ov: 'h',
			right: 0,
			pos: 'f',
			hei: '100%',
			'@media all and (max-width: 700px)': {
				wid: '100%'
			}
		}
	},
	sitemapOpen: function() {
		this.dispatch('updateContentWidth', {isSiteMapOpen: true, diff: this.sitemapWidth});
		this.css['.sitemap'].wid = this.sitemapWidth + 'px';
		this.css['.sitemap'].hei = this.getStyle('height', this.qs('.content'));
		this.populate();
	},
	sitemapClose: function() {
		this.dispatch('updateContentWidth', {isSiteMapOpen: false, diff: this.sitemapWidth});
		this.css['.sitemap'].wid = '0px';
		this.populate();
	},
	ready: function() {
		this.populate();
		this.wire('sitemapOpen');
		this.wire('sitemapClose');
	}
})();

absurd.component("SiteMapButton", {
	html: '.sitemap-button',
	open: false,
	clicked: function(e) {
		e.preventDefault();
		this.open = !this.open;
		this.dispatch('sitemap' + (this.open ? 'Open' : 'Close'));
	},
	ready: function() {
		this.populate();
	}
})();