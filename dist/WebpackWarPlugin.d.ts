/// <reference types="archiver" />
/// <reference types="webpack" />
import webpack = require('webpack');
import Compiler = webpack.Compiler;
import Plugin = webpack.Plugin;
import * as archiver from 'archiver';
export declare type WebpackWarPluginOptions = {
    archiveName?: string;
    webInf?: string;
    additionalElements?: {
        path: string;
        destPath?: string;
    }[];
    archiverOptions?: archiver.ArchiverOptions;
};
export declare class WebpackWarPlugin implements Plugin {
    private options;
    private archiver;
    constructor(options?: WebpackWarPluginOptions);
    apply(compiler: Compiler): void;
}
