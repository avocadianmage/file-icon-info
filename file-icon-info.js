"use strict";
exports.__esModule = true;
var child_process = require("child_process");
var EventEmitter = require("events");
var FileIconInfo = /** @class */ (function () {
    function FileIconInfo() {
        this.emitter = new EventEmitter();
    }
    FileIconInfo.prototype.getIcon = function (path) {
        var _this = this;
        var proc = child_process.spawn(__dirname + '/bin/FileIconInfo.exe');
        proc.stdout.on('data', function (data) {
            _this.emitter.emit('icon-info', data.toString());
        });
        proc.stderr.on('data', function (err) { return console.log(err.toString()); });
        proc.on('error', function (err) { return console.log(err.toString()); });
        proc.stdin.write(path + '\n');
    };
    return FileIconInfo;
}());
module.exports = new FileIconInfo();
