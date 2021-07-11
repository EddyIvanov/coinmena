import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import React from 'react'
import DeveloperItem from '../DeveloperItem'
import { IDeveloperListProps } from './types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listItem: {
      borderBottom: `1px solid ${theme.palette.secondary.main}`,
    },
  })
)

const DeveloperList: React.FC<IDeveloperListProps> = ({ developers }) => {
  const classes = useStyles()
  return (
    <ul>
      {developers.map((developer) => (
        <li key={developer.username} className={classes.listItem}>
          <DeveloperItem developer={developer} />
        </li>
      ))}
    </ul>
  )
}

export default DeveloperList
