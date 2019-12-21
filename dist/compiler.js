"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var path_1 = require("path");
var VuicCompiler = /** @class */ (function () {
    function VuicCompiler(_path) {
        this._path = _path;
    }
    VuicCompiler.prototype.compile = function (options) {
        var child = child_process_1.spawn(this._path, [options.sourcePath, path_1.join(options.outputPath, 'ui.vuic')], {
            stdio: 'inherit',
            cwd: process.cwd()
        });
        return new Promise(function (resolve, reject) {
            child.on('close', function (code) {
                if (code !== 0) {
                    reject("vuic exited with unexpected exit code: " + code);
                }
                resolve();
            });
        });
    };
    return VuicCompiler;
}());
exports.VuicCompiler = VuicCompiler;
