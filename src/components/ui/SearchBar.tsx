'use client';
import React from 'react';
import {Box, Flex, Input, InputGroup} from '@chakra-ui/react';
import {LuSearch} from 'react-icons/lu';
import {useResourcesContext} from '@/context/resource';

const SearchBar = () => {
	const {searchTerm, setSearchTerm} = useResourcesContext();

	return (
		<Flex my={10} alignItems="center" justifyContent="center" width="100%">
			<InputGroup
				startElement={
					<Box color={{base: '#000000', lg: '#A1A1A1'}}>
						<LuSearch size={20} />
					</Box>
				}
			>
				<Input
					placeholder="Search by title or keyword"
					variant={{base: 'subtle', lg: 'outline'}}
					backgroundColor={'transparent'}
					borderColor={{base: 'transparent', lg: '#A1A1A1'}}
					_placeholder={{color: {base: '#222222', lg: '#4F4F4F'}}}
					color={{base: '#222222', lg: '#4F4F4F'}}
					className="inter"
					as="search"
					borderRadius={'md'}
					size={{base: 'md', lg: 'lg'}}
					value={searchTerm}
					onChange={e => setSearchTerm(e.target.value)}
				/>
			</InputGroup>
		</Flex>
	);
};

export default SearchBar;
