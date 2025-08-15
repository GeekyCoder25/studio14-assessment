'use client';
import {useResourcesContext} from '@/context/resource';
import {useState} from 'react';
import {Box, Flex, Text} from '@chakra-ui/react';
import {IoFilterSharp} from 'react-icons/io5';

export const principles = [
	'Secure Base',
	'Sense of Exploration',
	'Learning Organization',
	'Mission and Vision',
	'Wellbeing',
];

export const types = ['DOC', 'Link', 'PDF', 'Video'];
export const categories = ['Sample', 'Sample', 'Sample', 'Sample', 'Sample'];

// Sidebar Filter Component
const FilterSidebar = () => {
	const {selectedFilters, setSelectedFilters} = useResourcesContext();
	const [showMobileFilter, setShowMobileFilter] = useState(false);

	const FilterSection = ({
		title,
		items,
		filterKey,
	}: {
		title: string;
		items: string[];
		filterKey: keyof typeof selectedFilters;
	}) => {
		const [isOpen, setIsOpen] = useState(true);

		const toggleCheckbox = (item: string) => {
			setSelectedFilters((prev: typeof selectedFilters) => {
				const updated = prev[filterKey].includes(item)
					? prev[filterKey].filter(i => i !== item)
					: [...prev[filterKey], item];
				return {...prev, [filterKey]: updated};
			});
		};

		return (
			<Box mb={6}>
				<Flex
					as="button"
					align="center"
					justify="space-between"
					w="full"
					textAlign="left"
					fontWeight="medium"
					color="gray.900"
					mb={3}
					_hover={{color: 'blue.500'}}
					onClick={() => setIsOpen(!isOpen)}
				>
					<Text
						fontWeight={'bold'}
						fontSize={'md'}
						color="#3F3F3F"
						className="inter"
					>
						{title}
					</Text>
					{/* <Icon
						as={FaChevronDown}
						boxSize={4}
						transform={isOpen ? 'rotate(180deg)' : ''}
						transition="transform 0.2s"
					/> */}
				</Flex>

				{isOpen && (
					<Flex flexDirection="column" align="start" gap={2} pl={2}>
						{items.map((item, index) => (
							<Flex
								key={index}
								alignItems={'center'}
								gap={2}
								onClick={() => toggleCheckbox(item)}
								as={'button'}
							>
								{selectedFilters[filterKey].includes(item) ? (
									<Flex
										width={'4'}
										height={'4'}
										border={'1px solid #E0E0E0'}
										borderRadius={'xs'}
										justifyContent={'center'}
										alignItems={'center'}
									>
										<Box
											width={'3'}
											height={'3'}
											borderRadius={'xs'}
											bg={'#3F3F3F'}
										/>
									</Flex>
								) : (
									<Box
										width={'4'}
										height={'4'}
										border={'1px solid #E0E0E0'}
										borderRadius={'xs'}
									/>
								)}
								<Text
									color={'#3F3F3F'}
									fontWeight={'normal'}
									fontSize={'md'}
									className="inter"
								>
									{item}
								</Text>
							</Flex>
						))}
					</Flex>
				)}
			</Box>
		);
	};

	return (
		<Box position={'relative'} zIndex={10} width={{base: '100%', lg: '270px'}}>
			<Flex
				display={{base: 'flex', lg: 'none'}}
				justifyContent="center"
				alignItems="center"
				onClick={() => setShowMobileFilter(!showMobileFilter)}
				flex={1}
				gap={2}
				bg={'#F1F1F1'}
				py={5}
				cursor={'pointer'}
			>
				<IoFilterSharp size={28} color="#000000" />
				<Text fontWeight="medium" color="#3F3F3F" className="inter">
					{showMobileFilter ? 'Hide' : 'Show'} Filters
				</Text>
			</Flex>

			<Box
				w={{base: '100%', lg: '270px'}}
				bg="white"
				px={5}
				py={{base: 8, lg: 16}}
				borderColor="gray.200"
				display={{base: showMobileFilter ? 'block' : 'none', lg: 'block'}}
				position={{base: 'absolute', lg: 'static'}}
				top={{base: '70px', lg: 'auto'}}
				zIndex={10}
			>
				<Box
					borderBottom="1px solid"
					borderColor="gray.200"
					pb={4}
					px={4}
					mb={6}
				>
					<Text fontWeight="bold" color="#3F3F3F" className="inter">
						Filters
					</Text>
				</Box>

				<FilterSection
					title="Key Foundational Principles"
					items={principles}
					filterKey="principles"
				/>

				<FilterSection title="Document type" items={types} filterKey="types" />

				<FilterSection
					title="Categories"
					items={categories}
					filterKey="categories"
				/>
			</Box>
		</Box>
	);
};

export default FilterSidebar;
