'use client';

import {ChakraProvider, defaultSystem} from '@chakra-ui/react';
import {ColorModeProvider, type ColorModeProviderProps} from './color-mode';
import {ResourcesProvider} from '@/context/resource';

export function Provider(props: ColorModeProviderProps) {
	return (
		<ResourcesProvider>
			<ChakraProvider value={defaultSystem}>
				<ColorModeProvider {...props} />
			</ChakraProvider>
		</ResourcesProvider>
	);
}
