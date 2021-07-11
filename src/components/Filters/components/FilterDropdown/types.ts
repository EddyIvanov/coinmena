export interface IFilterOption {
  name: string
  value: any
}

export interface IFilter {
  label: string
  name: string
  options: IFilterOption[]
}

export interface IFilterDropdownProps {
  filter: IFilter
  onFilterChange: (filter: IFilterOption) => void
}
