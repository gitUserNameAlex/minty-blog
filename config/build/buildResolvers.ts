import { ResolveOptions } from "webpack";


export function buildResolvers(): ResolveOptions {
    return {
			extensions: ['.tsx', '.ts', '.js'], //те расширения, для которых мы в import не будем указывать расширения
		} 
}