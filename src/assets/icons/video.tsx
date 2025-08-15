import * as React from 'react';
import type {SVGProps} from 'react';
const VideoIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={33}
		height={33}
		fill="none"
		{...props}
	>
		<path
			fill="#000"
			d="M21.197 13.579 15.01 9.454a1.031 1.031 0 0 0-1.604.858v8.25a1.032 1.032 0 0 0 1.604.859l6.187-4.125a1.03 1.03 0 0 0 0-1.717m-5.728 3.056v-4.389l3.297 2.191zM27.844 5.156H5.156A2.063 2.063 0 0 0 3.094 7.22v14.437a2.063 2.063 0 0 0 2.062 2.063h22.688a2.06 2.06 0 0 0 2.062-2.063V7.22a2.06 2.06 0 0 0-2.062-2.063m0 16.5H5.156V7.22h22.688zm2.062 5.157a1.03 1.03 0 0 1-1.031 1.03H4.125a1.031 1.031 0 0 1 0-2.062h24.75a1.03 1.03 0 0 1 1.031 1.032"
		/>
	</svg>
);
export default VideoIcon;
