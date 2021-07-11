import { IFilterOption } from './components/FilterDropdown/types'

export type FilterType = 'spokenLanguage' | 'language' | 'dateRange'

export interface IFiltersProps {
  filters: FilterType[]
  onFilterChange: (filter: IFilterOption) => void
}

export * from './components/FilterDropdown/types'
