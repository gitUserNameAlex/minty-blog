declare module '*.scss' {
	interface IClassNames {
		[className: string]: string
	}
	const classnames: IClassNames;
	export = classnames
}

declare module '*.svg' {
	import * as React from 'react';

	const ReactComponent: React.FunctionComponent<
		React.SVGProps<SVGSVGElement> & { title?: string }
	>;

	export default ReactComponent;
}

declare module '*png'
declare module '*jpg'
declare module '*jpeg'
declare module '*gif'

// объявили глобальную переменную __IS_DEV__
declare const __IS_DEV__: boolean;
