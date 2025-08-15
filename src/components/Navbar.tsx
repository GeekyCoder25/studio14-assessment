'use client';
import LogoIcon from '@/assets/icons/logo';
import {
	Box,
	Flex,
	Heading,
	Link,
	Switch,
	Container,
	Separator,
} from '@chakra-ui/react';
import {usePathname} from 'next/navigation';
import React from 'react';
import {FaBars} from 'react-icons/fa6';
import {HiChevronDown} from 'react-icons/hi';

const Navbar = () => {
	const navLinks = [
		{href: '/', label: 'Dashboard'},
		{href: '/resource', label: 'Resources'},
		{href: '/toolkit', label: 'Toolkit'},
	];
	const pathname = usePathname();

	const isActive = (href: string) => pathname === href;

	return (
		<Box bg="white" px={5} shadow={'inner'} shadowColor={'#0000000F'}>
			<Container maxW="1400px" p={0}>
				<Flex align="center" justify="space-between" w="full">
					<Flex align="center" gap={10}>
						<Flex align="center" gap={3} py={4} mr={5}>
							<LogoIcon />
							<Heading
								as="h1"
								size="lg"
								fontWeight="extrabold"
								fontFamily="Inter, sans-serif"
								color="#404040"
							>
								LOGO
							</Heading>
						</Flex>

						<Flex as="nav" display={{base: 'none', lg: 'flex'}}>
							{navLinks.map(link => (
								<Link
									key={link.href}
									href={link.href}
									color={isActive(link.href) ? '#314EF9' : '#2C3237'}
									_hover={{
										color: '#000',
										textDecoration: 'none',
									}}
									_focus={{
										boxShadow: 'none',
										outline: 'none',
									}}
									transition="color 0.3s ease"
									fontWeight="semibold"
									textAlign="center"
									fontSize="sm"
									px={4}
									py={5}
									borderBottom={
										isActive(link.href) ? '4px solid #314EF9' : 'none'
									}
									position="relative"
								>
									{link.label}
								</Link>
							))}
						</Flex>
					</Flex>

					<Flex align="center" color={'#000000'}>
						<Switch.Root colorPalette={'blue'} size="md" defaultChecked>
							<Switch.HiddenInput />
							<Switch.Control>
								<Switch.Thumb />
							</Switch.Control>
							<Switch.Label
								fontWeight={'semibold'}
								fontSize={14}
								display={{base: 'none', lg: 'flex'}}
							>
								Switch to Employee
							</Switch.Label>
						</Switch.Root>
						<Separator
							orientation="vertical"
							mx={5}
							h={6}
							colorPalette={'gray'}
						/>
						<Flex align="center" cursor="pointer" gap={3}>
							<Flex
								justifyContent="center"
								alignItems="center"
								bg={'#17E4A1'}
								w={'8'}
								h={'8'}
								borderRadius="full"
								fontSize={12}
								fontWeight={800}
							>
								JA
							</Flex>
							<Flex
								alignItems="center"
								fontSize={14}
								fontWeight={600}
								color="#525252"
								display={{base: 'none', lg: 'flex'}}
							>
								<span>Jonathan</span>
								<HiChevronDown />
							</Flex>
							<Box display={{base: 'block', lg: 'none'}}>
								<FaBars size={24} />
							</Box>
						</Flex>
					</Flex>
				</Flex>
			</Container>
		</Box>
	);
};

export default Navbar;
