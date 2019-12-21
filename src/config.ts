export interface VextPackConfig {
    // Output path, defaults to the Webpack output path (required)
    outputPath: string;

    // Build mode
	mode: string;

    // Path of the vuic compiler (required)
    compilerPath: string;

    // Custom file name for the vuic compiler (default: vuicc.exe)
    compilerFile: string;
}
