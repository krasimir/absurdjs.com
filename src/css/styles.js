module.exports = function(api) {
	api.import([
		__dirname + '/common.js',
		__dirname + '/landing/landing.js',
		__dirname + '/landing/content.js',
		__dirname + '/pages/content.js',
		__dirname + '/pages/nav.js',
		__dirname + '/quick-tips.js',
		__dirname + '/quick-tips.js',
		__dirname + '/footer.js'
	]);
}