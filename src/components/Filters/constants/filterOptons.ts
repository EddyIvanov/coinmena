import { FilterType, IFilter } from '../types'
import { DATE_RANGE_OPTIONS } from './dateRangeOptions'
import { LANGUAGE_OPTIONS } from './languageOptions'
import { SPOKEN_LANGUAGE_OPTIONS } from './spokenLanguageOptions'

export const FILTER_OPTIONS: Record<FilterType, IFilter> = {
  spokenLanguage: SPOKEN_LANGUAGE_OPTIONS,
  language: LANGUAGE_OPTIONS,
  dateRange: DATE_RANGE_OPTIONS,
}
