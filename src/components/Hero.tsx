import {Container, Text} from '@chakra-ui/react';
import React from 'react';
import SearchBar from './ui/SearchBar';

const Hero = () => {
	return (
		<Container
			centerContent
			pt={{base: 10, lg: 20}}
			pb={{base: 5, lg: 10}}
			maxW={{base: '10/12', lg: '1/2'}}
			as={'header'}
		>
			<Text
				as="h2"
				color="#2C3237"
				fontSize={{base: '4xl', lg: '5xl'}}
				fontWeight="bold"
			>
				Resources
			</Text>
			<Text
				textAlign="center"
				mt={{base: 5, lg: 5}}
				color="#2C3237"
				fontSize={{base: 'lg', lg: 'md'}}
				className="inter"
			>
				Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet
				commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue
			</Text>
			<SearchBar />
		</Container>
	);
};

export default Hero;
