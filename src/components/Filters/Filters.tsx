import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import FilterDropdown from './components/FilterDropdown'
import { FILTER_OPTIONS } from './constants/filterOptons'
import { IFiltersProps } from './types'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        marginLeft: '10px',
      },
    },
  })
)

const Filters: React.FC<IFiltersProps> = ({ filters, onFilterChange }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {filters.map((filter) => {
        return (
          <FilterDropdown
            key={filter}
            filter={FILTER_OPTIONS[filter]}
            onFilterChange={onFilterChange}
          />
        )
      })}
    </div>
  )
}

export default Filters
