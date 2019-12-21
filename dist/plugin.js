"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var compiler_1 = require("./compiler");
var path_1 = require("path");
var VextPackPlugin = /** @class */ (function () {
    function VextPackPlugin(options) {
        this._options = __assign({ compilerPath: process.env.VUICC_PATH, mode: process.env.MODE, outputPath: '../', compilerFile: 'vuicc.exe' }, options);
        // TODO: Catch invalid compiler options
        this._vuicc = new compiler_1.VuicCompiler(path_1.join(this._options.compilerPath, this._options.compilerFile));
    }
    VextPackPlugin.prototype.apply = function (compiler) {
        var _this = this;
        compiler.hooks.afterEmit.tapPromise(VextPackPlugin.name, function (compilation) {
            // Ignore child compilers
            if (compilation.compiler.isChild()) {
                return Promise.resolve();
            }
            if (_this._options.mode == "development") {
                return _this._vuicc.compile({
                    sourcePath: "./proxy",
                    outputPath: _this._options.outputPath
                });
            }
            return _this._vuicc.compile({
                sourcePath: compilation.outputOptions.path,
                outputPath: _this._options.outputPath
            });
        });
    };
    return VextPackPlugin;
}());
exports.VextPackPlugin = VextPackPlugin;
