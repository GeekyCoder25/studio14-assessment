import FilterSidebar from '@/components/FilterSidebar';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Resource from '@/components/resource';
import {Box, Flex} from '@chakra-ui/react';

export default function Home() {
	return (
		<Flex as={'main'} flexDir={'column'} minHeight={'100vh'}>
			<Navbar />
			<Hero />
			<Box bg={'#FFFFFF'} height={'100%'} flex={1}>
				<Flex
					maxW={'1200px'}
					mx="auto"
					gap={{base: 0, lg: 10}}
					flexDirection={{base: 'column', lg: 'row'}}
				>
					<FilterSidebar />
					<Box pt={{base: '10', lg: '24'}} pb={'20'} px={{base: '5', lg: '5'}}>
						<Resource />
					</Box>
				</Flex>
			</Box>
		</Flex>
	);
}
