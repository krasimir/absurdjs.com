var through2 = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var path = require('path');
var fs = require("fs");
var request = require('request');
var ncp = require('ncp').ncp;
ncp.limit = 16;

module.exports = function () {

    function transform (file, enc, next) {
        var self = this;

        var url = "https://raw.github.com/krasimir/absurd/master/client-side/build/absurd.js";
        var urlMin = "https://raw.github.com/krasimir/absurd/master/client-side/build/absurd.min.js";
        var organicurl = "https://raw.github.com/krasimir/absurd/master/client-side/build/absurd.organic.js";
        var organicurlMin = "https://raw.github.com/krasimir/absurd/master/client-side/build/absurd.organic.min.js";

        var getAbsurd = function(callback) {
            request.get(url, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    fs.writeFileSync(__dirname + "/../builds/absurd.js", body, {});
                    request.get(urlMin, function (error, response, body) {
                        if (!error && response.statusCode == 200) {
                            fs.writeFileSync(__dirname + "/../builds/absurd.min.js", body, {});
                            if(callback) callback();
                        }
                    });
                }
            });
        }

        var getOrganic = function(callback) {
            request.get(organicurl, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    fs.writeFileSync(__dirname + "/../builds/absurd.organic.js", body, {});
                    request.get(organicurlMin, function (error, response, body) {
                        if (!error && response.statusCode == 200) {
                            fs.writeFileSync(__dirname + "/../builds/absurd.organic.min.js", body, {});
                            if(callback) callback();
                        }
                    });
                }
            });
        }

        var getTests = function(callback) {
            var source = __dirname + '/../node_modules/absurd/client-side/tests';
            var destination = __dirname + '/../tests';
            var testsIndex = __dirname + '/../tests/index.php';
            ncp(source, destination, function (err) {
                var indexContent = fs.readFileSync(testsIndex);
                indexContent = indexContent.toString().replace(/\/build/g, '/builds');
                fs.writeFileSync(testsIndex, indexContent);
                callback();
            });
        }

        getAbsurd(function() {
            getOrganic(function() {
                getTests(next);
            });
        })
    }

    return through2.obj(transform);
};