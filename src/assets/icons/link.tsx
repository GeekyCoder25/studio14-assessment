import * as React from 'react';
import type {SVGProps} from 'react';
const LinkIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={33}
		height={33}
		fill="none"
		{...props}
	>
		<path
			stroke="#000"
			strokeLinecap="round"
			strokeWidth={3}
			d="m16.5 23.375-2.062 2.062a4.862 4.862 0 0 1-6.875-6.875l4.125-4.125a4.86 4.86 0 0 1 6.874 0"
		/>
		<path
			stroke="#000"
			strokeLinecap="round"
			strokeWidth={3}
			d="m16.5 9.625 2.063-2.063a4.862 4.862 0 0 1 6.875 6.875l-4.125 4.125a4.86 4.86 0 0 1-6.875 0"
		/>
	</svg>
);
export default LinkIcon;
