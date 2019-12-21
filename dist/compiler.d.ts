export interface CompilerOptions {
    sourcePath: string;
    outputPath: string;
}
export declare class VuicCompiler {
    private _path;
    constructor(_path: string);
    compile(options: CompilerOptions): Promise<void>;
}
