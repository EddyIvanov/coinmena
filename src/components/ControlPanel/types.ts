import { IFilterOption } from '../Filters/types'

export interface IControlPanelProps {
  onFilterChange: (filter: IFilterOption) => void
}
