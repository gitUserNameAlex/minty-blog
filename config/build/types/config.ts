export type BuildMode = 'development' | 'production';

export interface BuildPaths {
    entry: string,
    output: string,
    html: string
}

export interface BuildEnv {
    port: number,
    mode: BuildMode,
}

export interface BuildOptions {
    mode: BuildMode,
    paths: BuildPaths,
    isDev: boolean,
    port: number
}