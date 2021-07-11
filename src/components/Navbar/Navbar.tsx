import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { ROUTES } from '../../constants/routes'

const Navbar: React.FC = () => {
  const location = useLocation()

  return (
    <ButtonGroup variant="contained">
      <Button
        color={
          location.pathname === ROUTES.REPOSITORIES.route
            ? 'primary'
            : 'secondary'
        }
        exact
        component={NavLink}
        to={ROUTES.REPOSITORIES.route}
      >
        {ROUTES.REPOSITORIES.name}
      </Button>
      <Button
        color={
          location.pathname === ROUTES.DEVELOPERS.route
            ? 'primary'
            : 'secondary'
        }
        component={NavLink}
        to={ROUTES.DEVELOPERS.route}
      >
        {ROUTES.DEVELOPERS.name}
      </Button>
    </ButtonGroup>
  )
}

export default Navbar
