import React from 'react'
import Link from '@material-ui/core/Link'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { PopularRepoIcon } from '../../../../icons/popularRepo'
import { RepositoryIcon } from '../../../../icons/repositoryIcon'
import { IRepositoryProps } from './types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tag: {
      display: 'flex',
      textTransform: 'uppercase',
    },
    popRepoIcon: {
      color: '#cb793b',
    },
    repository: {
      display: 'flex',
    },
    description: {
      fontSize: '12px',
    },
    link: {
      fontSize: '16px',
      fontWeight: 600,
      color: theme.palette.primary.light,
    },
  })
)

const Repository: React.FC<IRepositoryProps> = ({ repository }) => {
  const classes = useStyles()
  const { description, url, repositoryName } = repository
  return (
    <>
      <div className={classes.tag}>
        <PopularRepoIcon className={classes.popRepoIcon} /> Popular repo
      </div>
      <div className={classes.repository}>
        <RepositoryIcon />
        <Link
          className={classes.link}
          target="_blank"
          href={url}
          rel="noopener"
        >
          {repositoryName}
        </Link>
      </div>
      {description && <p className={classes.description}>{description}</p>}
    </>
  )
}

export default Repository
