import * as child_process from 'child_process';
import * as EventEmitter from 'events';

export class FileIconInfo {
    emitter: EventEmitter = new EventEmitter();
    
    getIcon(path: string) {
        const proc = child_process.spawn(__dirname + '/bin/FileIconInfo.exe');
        proc.stdout.on('data', data => {
            this.emitter.emit('icon-info', data.toString());
        });
        proc.stderr.on('data', err => console.log(err.toString()));
        proc.on('error', err => console.log(err.toString()));
        proc.stdin.write(path + '\n');
    }
}
