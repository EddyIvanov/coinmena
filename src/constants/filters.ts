import { FilterType } from '../components/Filters/types'

type Filters = Record<string, FilterType[]>

export const FILTERS: Filters = {
  repositories: ['spokenLanguage', 'language', 'dateRange'],
  developers: ['language', 'dateRange'],
}
