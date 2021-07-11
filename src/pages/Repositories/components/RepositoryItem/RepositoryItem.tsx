import React from 'react'
import { Link } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { StarOutlineRounded } from '@material-ui/icons'
import BuiltBy from '../BuildBy'
import { IRepositoryItemProps } from './types'
import { RepositoryIcon } from '../../../../icons/repositoryIcon'
import { ForkIcon } from '../../../../icons/forkIcon'
import StyledButton from '../../../../components/ui/StyledButton'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '15px',
    },
    mainBox: {
      width: '70%',
    },
    secondaryBox: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
    },
    link: {
      fontSize: '20px',
      color: theme.palette.primary.light,
    },
    linkRepo: {
      fontWeight: 600,
    },
    infoPanel: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '8px',
      '& > *': {
        marginRight: '16px',
      },
    },
    infoItem: {
      display: 'flex',
      alignItems: 'center',
    },
  })
)

const RepositoryItem: React.FC<IRepositoryItemProps> = ({
  repository,
  toggleStar,
}) => {
  const classes = useStyles()
  const {
    builtBy,
    description,
    forks,
    isStarred,
    language,
    rank,
    repositoryName,
    starsSince,
    totalStars,
    url,
    username,
  } = repository

  const handleToggleStar = (): void => {
    toggleStar(rank, !isStarred)
  }

  return (
    <div className={classes.root}>
      <div className={classes.mainBox}>
        <div className={classes.infoItem}>
          <RepositoryIcon />
          <Link
            className={classes.link}
            target="_blank"
            href={url}
            rel="noopener"
          >
            {username && <span>{`${username} / `}</span>}
            <span className={classes.linkRepo}>{repositoryName}</span>
          </Link>
        </div>
        {description && <p>{description}</p>}
        <div className={classes.infoPanel}>
          {language && <span className={classes.infoItem}>{language}</span>}
          {totalStars && (
            <span className={classes.infoItem}>
              <StarOutlineRounded /> {totalStars}
            </span>
          )}
          {forks && (
            <span className={classes.infoItem}>
              <ForkIcon />
              {forks}
            </span>
          )}
          {builtBy && <BuiltBy users={builtBy} />}
        </div>
      </div>
      <div className={classes.secondaryBox}>
        <StyledButton
          variant="contained"
          color="secondary"
          startIcon={<StarOutlineRounded />}
          onClick={handleToggleStar}
        >
          {`${isStarred ? 'Unstar' : 'Star'}`}
        </StyledButton>
        {starsSince && (
          <div className={classes.infoItem}>
            <StarOutlineRounded /> {`${starsSince} stars today`}
          </div>
        )}
      </div>
    </div>
  )
}

export default RepositoryItem
