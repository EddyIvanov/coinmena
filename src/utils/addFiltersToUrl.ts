import { FilterParams } from '../types/filterParams'

export function addFiltersToUrl(url: string, filters: FilterParams): string {
  const { language, ...rest } = filters
  return Object.keys(rest).reduce(
    (acc: string, key: string, index: number, array: string[]) => {
      return `${acc}${index === 0 ? '?' : ''}${key}=${rest[key]}${
        index < array.length - 1 ? '&' : ''
      }`
    },
    `${url}${language ? `/${language}` : ''}`
  )
}
