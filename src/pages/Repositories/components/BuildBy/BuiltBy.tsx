import Avatar from '@material-ui/core/Avatar'
import Link from '@material-ui/core/Link'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import React from 'react'
import { IBuiltByProps } from './types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
    },
    list: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
    smallIcon: {
      width: theme.spacing(2.9),
      height: theme.spacing(2.9),
    },
  })
)

const BuiltBy: React.FC<IBuiltByProps> = ({ users }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <p>Built by</p>
      <ul className={classes.list}>
        {users.map((user) => {
          const { username, avatar, url } = user
          return (
            <li key={username}>
              <Link target="_blank" href={url}>
                <Avatar
                  alt={username}
                  src={avatar}
                  className={classes.smallIcon}
                />
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default BuiltBy
