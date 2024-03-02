import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { DefinePlugin, ProgressPlugin, WebpackPluginInstance } from 'webpack';

import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev }: BuildOptions): WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({ template: paths.html }),
        new ProgressPlugin(), // Ускорение сборки + progress bar сборки
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        // Этот плагин позволяет определять глобальные константы в коде
        // В данном случае isDev - переменная конфига
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
    ];
}
