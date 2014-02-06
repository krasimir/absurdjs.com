var absurd = require('absurd')();
var through2 = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var path = require('path');
var fs = require("fs");
var markdown = require("markdown").markdown;

module.exports = function () {

    function transform (file, enc, next) {
        var self = this;

        if (file.isNull()) {
            this.push(file); // pass along
            return next();
        }

        if (file.isStream()) {
            this.emit('error', new PluginError('page', 'Streaming not supported'));
            return next();
        }

        var page = require(file.path);
        var root = __dirname + "/../";
        var fileRoot = path.dirname(file.path);
        var url = fileRoot.replace(path.resolve(root), '').replace('\\pages\\', '');
        
        var html = fs.readFileSync(root + page.base).toString('utf8');
        html = html.replace('{content}', markdown.toHTML(fs.readFileSync(fileRoot + '/page.md').toString('utf8')));
        
        if(!fs.existsSync(root + 'site/' + url)) {
            fs.mkdirSync(root + 'site/' + url, '0777');
        }

        fs.writeFileSync(root + 'site/' + url + '/index.html', html);

        next();

    }

    return through2.obj(transform);
};