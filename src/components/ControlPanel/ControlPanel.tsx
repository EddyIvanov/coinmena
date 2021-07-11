import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { useLocation } from 'react-router-dom'
import { FILTERS } from '../../constants/filters'
import Filters from '../Filters'
import Navbar from '../Navbar'
import { IControlPanelProps } from './types'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '15px',
      backgroundColor: '#161b22',
    },
  })
)

const ControlPanel: React.FC<IControlPanelProps> = ({ onFilterChange }) => {
  const classes = useStyles()
  const location = useLocation()
  const selectedPage = location.pathname.replace('/', '')

  return (
    <nav className={classes.root}>
      <Navbar />
      <Filters
        filters={FILTERS[selectedPage] || []}
        onFilterChange={onFilterChange}
      />
    </nav>
  )
}

export default ControlPanel
