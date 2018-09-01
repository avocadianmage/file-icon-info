"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process = require("child_process");
function getIcon(path, callback) {
    const proc = child_process.spawn(__dirname + '/bin/FileIconInfo.exe');
    proc.stdout.on('data', data => callback(data));
    proc.stderr.on('data', err => console.log(err.toString()));
    proc.on('error', err => console.log(err.toString()));
    proc.stdin.write(path + '\n');
}
exports.getIcon = getIcon;
