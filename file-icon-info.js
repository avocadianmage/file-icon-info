const child_process = require('child_process');
const EventEmitter = require('events');

function FileIconInfo() {
    this.emitter = new EventEmitter();
    this.getIcon = path => {
        const proc = child_process.spawn(__dirname + '/bin/FileIconInfo.exe');
        proc.stdout.on('data', data => {
            this.emitter.emit('icon-info', data.toString());
        });
        proc.stderr.on('data', err => console.log(err.toString()));
        proc.on('error', err => console.log(err.toString()));
        proc.stdin.write(path + '\n');
    };
}

module.exports = new FileIconInfo();
