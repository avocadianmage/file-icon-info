import { execFile } from 'child_process';
import * as path from 'path';

export function getIcon(exePath: string, callback: (data: string) => any) {
    const helperBinaryPath = path.join(__dirname, 'FileIconInfo.exe');
    const child = execFile(helperBinaryPath, (error, stdout, stderr) => {
        if (error) throw error;
        else callback(stdout);
    });
    child.stdin.write(`${exePath}\n`);
}
