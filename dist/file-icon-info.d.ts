/// <reference types="node" />
import * as EventEmitter from 'events';
export declare class FileIconInfo {
    emitter: EventEmitter;
    getIcon(path: string): void;
}
