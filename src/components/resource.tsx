'use client';
import React from 'react';
import ResourceCard from './ResourceCard';
import {Grid} from '@chakra-ui/react';
import {resources} from '@/data/resource';
import {SelectedFilters, useResourcesContext} from '@/context/resource';
import {ResourceData} from '@/types/resource';

const Resource = () => {
	const {searchTerm, selectedFilters} = useResourcesContext();

	const filterResources = (
		resources: ResourceData[],
		selectedFilters: SelectedFilters
	): ResourceData[] => {
		return resources.filter(resource => {
			const {principles, types, categories} = selectedFilters;

			// If no filters are selected, show all resources
			if (
				principles.length === 0 &&
				types.length === 0 &&
				categories.length === 0
			) {
				return true;
			}

			// Check if resource matches selected principles
			const matchesPrinciples = principles.some(principle =>
				resource.principle?.includes(principle)
			);

			// Check if resource matches selected types
			const matchesTypes = types
				.map(type => type.toLowerCase())
				.includes(resource.type.toLowerCase());

			// Check if resource matches selected categories
			const matchesCategories = categories
				?.map(type => type.toLowerCase())
				.some(
					category =>
						resource.category.toLowerCase().includes(category.toLowerCase()) ||
						category.toLowerCase().includes(resource.category.toLowerCase())
				);

			// Return true only if all selected filter types match
			return matchesPrinciples && matchesTypes && matchesCategories;
		});
	};

	// Usage in JSX
	const filteredResources = filterResources(resources, selectedFilters);

	return (
		<Grid
			templateColumns={{
				sm: 'repeat(2, 1fr)',
				md: 'repeat(3, 1fr)',
				lg: 'repeat(2, 1fr)',
				xl: 'repeat(3, 1fr)',
			}}
			gap={6}
			overflow={'hidden'}
			height={'100%'}
		>
			{filteredResources
				.filter(resource =>
					JSON.stringify(resource)
						.toLowerCase()
						.includes(searchTerm.trim().toLowerCase())
				)
				.map(resource => (
					<ResourceCard key={resource.id} resource={resource} />
				))}
		</Grid>
	);
};

export default Resource;
