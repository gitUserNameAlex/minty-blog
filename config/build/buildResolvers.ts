import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'], // те расширения, для которых мы в import не будем указывать расширения
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {},
    };
}
