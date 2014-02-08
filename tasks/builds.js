var through2 = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var path = require('path');
var fs = require("fs");
var request = require('request');

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

        getAbsurd(function() {
            getOrganic(next);
        })
    }

    return through2.obj(transform);
};