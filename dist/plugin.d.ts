import { Compiler, Plugin } from "webpack";
import { VextPackConfig } from "./config";
export declare class VextPackPlugin implements Plugin {
    private _vuicc;
    private _options;
    constructor(options?: Partial<VextPackConfig>);
    apply(compiler: Compiler): void;
}
