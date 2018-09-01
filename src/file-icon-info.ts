import * as child_process from 'child_process';

export function getIcon(path: string, callback: (data: string) => any) {
    const proc = child_process.spawn(__dirname + '/FileIconInfo.exe');
    proc.stdout.on('data', data => callback(data));
    proc.stderr.on('data', err => console.log(err.toString()));
    proc.on('error', err => console.log(err.toString()));
    proc.stdin.write(path + '\n');
}
