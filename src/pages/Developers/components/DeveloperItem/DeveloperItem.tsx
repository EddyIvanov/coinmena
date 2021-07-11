import Avatar from '@material-ui/core/Avatar'
import Link from '@material-ui/core/Link'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { FavoriteBorder } from '@material-ui/icons'
import clsx from 'clsx'
import React from 'react'
import StyledButton from '../../../../components/ui/StyledButton'
import Repository from '../Repository'
import { IDeveloperItemProps } from './types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      padding: '10px',
    },
    column: {
      flex: '1 1 auto',
      width: '100%',
      padding: '5px',
      wordBreak: 'break-word',
    },
    rankColumn: {
      maxWidth: '20px',
      textAlign: 'center',
    },
    userColumn: {},
    repoColumn: {
      maxWidth: '300px',
    },
    actionsColumn: {
      maxWidth: '280px',
      display: 'flex',
      justifyContent: 'flex-end',
      '& > *': {
        marginLeft: '10px',
      },
    },
    userWraper: {
      display: 'flex',
    },
    avatar: {
      width: theme.spacing(6),
      height: theme.spacing(6),
      marginRight: '10px',
    },
    userLink: {
      fontSize: '20px',
      fontWeight: 600,
      color: theme.palette.primary.light,
    },
    sponsorIcon: {
      color: '#ab5383',
    },
  })
)

const DeveloperItem: React.FC<IDeveloperItemProps> = ({ developer }) => {
  const classes = useStyles()
  const { avatar, isFollowed, rank, name, url, username, popularRepository } =
    developer
  return (
    <div key={developer.username} className={classes.root}>
      <div className={clsx(classes.column, classes.rankColumn)}>{rank}</div>
      <div className={clsx(classes.column, classes.userColumn)}>
        <div className={classes.userWraper}>
          <Avatar className={classes.avatar} alt={name} src={avatar} />
          <div>
            <Link
              className={classes.userLink}
              target="_blank"
              href={url}
              rel="noopener"
            >
              {name}
            </Link>
            <div>{username}</div>
          </div>
        </div>
      </div>
      <div className={clsx(classes.column, classes.repoColumn)}>
        {popularRepository && <Repository repository={popularRepository} />}
      </div>
      <div className={clsx(classes.column, classes.actionsColumn)}>
        <StyledButton
          variant="contained"
          color="secondary"
          startIcon={<FavoriteBorder className={classes.sponsorIcon} />}
        >
          Sponsor
        </StyledButton>
        <StyledButton variant="contained" color="secondary">
          {`${isFollowed ? 'Unfollow' : 'Follow'}`}
        </StyledButton>
      </div>
    </div>
  )
}

export default DeveloperItem
