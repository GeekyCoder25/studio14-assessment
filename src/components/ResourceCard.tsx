import Bubble1Icon from '@/assets/icons/bubble1';
import Bubble2Icon from '@/assets/icons/bubble2';
import Bubble3Icon from '@/assets/icons/bubble3';
import Bubble4Icon from '@/assets/icons/bubble4';
import Bubble5Icon from '@/assets/icons/bubble5';
import Bubble6Icon from '@/assets/icons/bubble6';
import LinkIcon from '@/assets/icons/link';
import PDFIcon from '@/assets/icons/pdf';
import VideoIcon from '@/assets/icons/video';
import {Box, Flex, Heading, Text} from '@chakra-ui/react';
import {ResourceData} from '../types/resource';

const ResourceCard = ({resource}: {resource: ResourceData}) => {
	const getIcon = (type: string) => {
		switch (type) {
			case 'video':
				return <VideoIcon />;
			case 'pdf':
				return <PDFIcon />;
			default:
				return <LinkIcon />;
		}
	};

	const bubble = () => {
		switch (resource.id) {
			case 1:
				return <Bubble1Icon />;
			case 2:
				return <Bubble2Icon />;
			case 3:
				return <Bubble3Icon />;
			case 4:
				return <Bubble4Icon />;
			case 5:
				return <Bubble5Icon />;
			case 6:
				return (
					<Flex justifyContent="flex-end" alignItems="center">
						<Bubble6Icon />
					</Flex>
				);
		}
	};

	return (
		<Box
			bg="white"
			rounded="lg"
			// shadow="inner"
			border="1px solid"
			borderColor="gray.200"
			overflow="hidden"
			cursor="pointer"
			transition="all 0.3s"
			_hover={{
				// shadow: 'md',
				transform: 'translateY(-4px)',
			}}
			h={['auto', 'auto', '265px']}
			position="relative"
			mx={'auto'}
			maxW={350}
		>
			{/* Top colored section */}
			<Box position="absolute" top={0} right={0} w="100%" mt={-5}>
				{bubble()}
			</Box>

			{/* Content */}
			<Box px={6} pt={10} pb={6} zIndex={1} position={'relative'}>
				<Box mb={12}>{getIcon(resource.type)}</Box>
				<Heading
					as="h3"
					fontWeight="bold"
					color="#2C3237"
					mb={3}
					transition="color 0.2s"
					fontFamily={'Poppins, sans-serif'}
					fontSize={'xl'}
					h={'14'}
					display="flex"
					alignItems="flex-end"
					lineHeight="1.2"
				>
					{resource.title}
				</Heading>
				<Text
					fontSize="sm"
					color="#828282"
					fontWeight={'normal'}
					className="inter"
					mb={2}
				>
					{resource.category}
				</Text>
				<Flex>
					<Box bg={'#F2F2F2'} py={1} px={3} rounded="full" mr={2}>
						<Text
							fontSize={{base: 'md', lg: 'xs'}}
							color="#222222"
							fontWeight="medium"
						>
							{resource.principle}
						</Text>
					</Box>
				</Flex>
			</Box>
		</Box>
	);
};

export default ResourceCard;
