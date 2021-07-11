import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import React from 'react'
import RepositoryItem from '../RepositoryItem'
import { IRepositoryListProps } from './types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listItem: {
      borderBottom: `1px solid ${theme.palette.secondary.main}`,
    },
  })
)

const DeveloperList: React.FC<IRepositoryListProps> = ({
  repositories,
  toggleStar,
}) => {
  const classes = useStyles()
  return (
    <ul>
      {repositories.map((repository) => (
        <li key={repository.forks} className={classes.listItem}>
          <RepositoryItem repository={repository} toggleStar={toggleStar} />
        </li>
      ))}
    </ul>
  )
}

export default DeveloperList
