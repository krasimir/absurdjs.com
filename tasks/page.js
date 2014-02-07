var absurd = require('absurd')();
var through2 = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var path = require('path');
var fs = require("fs");
var markdown = require("markdown").markdown;
var base = fs.readFileSync(__dirname + "/../layout.html").toString('utf8')

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

        var root = __dirname + "/../";
        var fileRoot = path.dirname(file.path);
        var htmlFile = path.basename(file.path).replace(".md", ".html");
        
        html = base.replace('{content}', markdown.toHTML(fs.readFileSync(file.path).toString('utf8')));
        fs.writeFileSync(fileRoot + '/' + htmlFile, html);

        next();

    }

    return through2.obj(transform);
};