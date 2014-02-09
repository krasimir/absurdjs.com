var absurd = require('absurd')();
var through2 = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var path = require('path');
var fs = require("fs");
var md = require("node-markdown").Markdown;
var absurdVersion = require(__dirname + '/../node_modules/absurd/package.json').version;

module.exports = function () {

    var getSiteMap = function(sitemap, path) {
        var process = function(items) {
            var html = '<ul>';
            for(var i=0; i<items.length; i++) {
                var active = items[i].path == path ? ' class="active"' : '';
                html += '<li><a href="' + items[i].path + '"' + active + '>' + items[i].name + '</a></li>';
                if(items[i].childs) {
                    html += '<li>' + process(items[i].childs) + '</li>';
                }
            }
            return html + '</ul>';
        }
        return process(sitemap);
    }

    var getPageTitle = function(sitemap, path) {
        var allItems = [];
        var process = function(items) {
            for(var i=0; i<items.length; i++) {
                allItems.push(items[i]);
                if(items[i].childs) {
                    process(items[i].childs);
                }
            }
        }
        process(sitemap);
        for(var i=0; i<allItems.length; i++) {
            if(allItems[i].path == path) return allItems[i].name;
        }
        return 'AbsurdJS - JavaScript library with superpowers';
    }

    var getGuide = function(sitemap, path) {
        var allItems = [];
        var result = {
            previousPath: '',
            previousName: '',
            nextPath: '',
            nextName: ''
        };
        var process = function(items) {
            for(var i=0; i<items.length; i++) {
                allItems.push(items[i]);
                if(items[i].childs) {
                    process(items[i].childs);
                }
            }
        }
        process(sitemap);
        for(var i=0; i<allItems.length; i++) {
            if(allItems[i].path == path) {
                if(i > 0) {
                    result.previousName = '<i class="fa fa-arrow-circle-o-left"></i> ' + allItems[i-1].name;
                    result.previousPath = allItems[i-1].path;
                }
                if(i < allItems.length-1) {
                    result.nextName = allItems[i+1].name + ' <i class="fa fa-arrow-circle-o-right"></i>';
                    result.nextPath = allItems[i+1].path;   
                }
            }
        }
        return result;
    }

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

        var sitemap = JSON.parse(fs.readFileSync(__dirname + '/../pages/structure.json'));
        var layoutHTML = fs.readFileSync(__dirname + "/../layout.html").toString('utf8');
        var root = __dirname + "/../";
        var fileRoot = path.dirname(file.path);
        var htmlFile = path.basename(file.path).replace(".md", ".html");
        var fileURL = fileRoot.replace(path.resolve(root), '').replace(/\\/g, '/');        
        var contentHTML = md(fs.readFileSync(file.path).toString('utf8'));
        contentHTML = contentHTML.replace(/<code>/g, '<code class="language-javascript">');
        layoutHTML = layoutHTML.replace('<content>', contentHTML);
        layoutHTML = layoutHTML.replace(/&lt;%/g, '<%');

        var partials = {
            version: absurdVersion,
            sitemap: getSiteMap(sitemap, fileURL),
            pageTitle: getPageTitle(sitemap, fileURL),
            guide: getGuide(sitemap, fileURL)
        }

        absurd.flush().morph("html").add(layoutHTML).compile(function(err, html) {
            fs.writeFileSync(fileRoot + '/' + htmlFile, html);    
        }, partials);        

        next();

    }

    return through2.obj(transform);
};