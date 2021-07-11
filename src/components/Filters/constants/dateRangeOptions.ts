import { IFilter } from '../types'

export const DATE_RANGE_OPTIONS: IFilter = {
  label: 'Date range:',
  name: 'since',
  options: [
    {
      name: 'Today',
      value: 'daily',
    },
    {
      name: 'This week',
      value: 'weekly',
    },
    {
      name: 'This month',
      value: 'monthly',
    },
  ],
}
