var absurd = require('absurd')();
var through2 = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var path = require('path');
var fs = require("fs");
var md = require("node-markdown").Markdown;
var absurdVersion = require(__dirname + '/../node_modules/absurd/package.json').version;

module.exports = function () {

    function transform (file, enc, next) {
        var self = this;

        if(file.isNull()) {
            this.push(file); // pass along
            return next();
        }

        if(file.isStream()) {
            this.emit('error', new PluginError('page', 'Streaming not supported'));
            return next();
        }

        var layoutHTML = fs.readFileSync(__dirname + "/../layout.html").toString('utf8');
        var root = __dirname + "/../";
        var fileRoot = path.dirname(file.path);
        var htmlFile = path.basename(file.path).replace(".md", ".html");

        var contentHTML = md(fs.readFileSync(file.path).toString('utf8'));
        contentHTML = contentHTML.replace(/<code>/g, '<code class="language-javascript">');
        layoutHTML = layoutHTML.replace('<content>', contentHTML);
        layoutHTML = layoutHTML.replace(/&lt;%/g, '<%');

        var partials = {
            version: absurdVersion
        }

        absurd.flush().morph("html").add(layoutHTML).compile(function(err, html) {
            fs.writeFileSync(fileRoot + '/' + htmlFile, html);    
        }, partials);        

        next();

    }

    return through2.obj(transform);
};