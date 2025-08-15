import {categories, principles, types} from '@/components/FilterSidebar';
import {
	createContext,
	useContext,
	useState,
	ReactNode,
	Dispatch,
	SetStateAction,
} from 'react';

export type SelectedFilters = {
	principles: string[];
	types: string[];
	categories: string[];
};

type ResourcesContextType = {
	searchTerm: string;
	setSearchTerm: Dispatch<SetStateAction<string>>;
	selectedFilters: SelectedFilters;
	setSelectedFilters: Dispatch<SetStateAction<SelectedFilters>>;
};

const ResourcesContext = createContext<ResourcesContextType | undefined>(
	undefined
);

type ResourcesProviderProps = {
	children: ReactNode;
};

export const ResourcesProvider = ({children}: ResourcesProviderProps) => {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
		principles,
		types,
		categories,
	});

	return (
		<ResourcesContext.Provider
			value={{
				searchTerm,
				setSearchTerm,
				selectedFilters,
				setSelectedFilters,
			}}
		>
			{children}
		</ResourcesContext.Provider>
	);
};

export const useResourcesContext = (): ResourcesContextType => {
	const context = useContext(ResourcesContext);
	if (!context) {
		throw new Error(
			'useResourcesContext must be used within ResourcesProvider'
		);
	}
	return context;
};
