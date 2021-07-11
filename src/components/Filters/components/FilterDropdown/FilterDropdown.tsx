import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { IFilterDropdownProps } from './types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'inherit',
      margin: 0,
      '& label + *': {
        margin: 0,
      },
    },
    select: {
      '&:before, &:after': {
        content: 'none',
      },
    },
    input: {
      fontSize: '14px',
    },
    selectIcon: {
      color: theme.palette.text.primary,
    },
    label: {
      position: 'static',
      transform: 'inherit',
      fontSize: '14px',
      color: theme.palette.text.primary,
      marginRight: '5px',
      '&.Mui-focused': {
        color: theme.palette.text.primary,
      },
    },
  })
)

const FilterDropdown: React.FC<IFilterDropdownProps> = ({
  filter,
  onFilterChange,
}) => {
  const classes = useStyles()
  const [value, setValue] = React.useState(filter.options[0].value)
  const { label, name, options } = filter

  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ): void => {
    const newValue = event.target.value
    setValue(newValue)
    onFilterChange({ name, value: newValue })
  }

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.label} htmlFor={name}>
          {label}
        </InputLabel>
        <Select
          className={classes.select}
          native
          value={value}
          onChange={handleChange}
          inputProps={{
            name: `${name}`,
            id: `${name}`,
          }}
          classes={{
            root: classes.input,
            icon: classes.selectIcon,
          }}
        >
          {options.map((option) => (
            <option key={option.name} value={option.value}>
              {option.name}
            </option>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default FilterDropdown
