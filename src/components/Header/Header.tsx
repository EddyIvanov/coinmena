import React from 'react'
import { useLocation } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'
import './Header.css'

const Header: React.FC = () => {
  const location = useLocation()
  return (
    <header className="Header">
      <h1>Trending</h1>
      <h5>
        {`${
          location.pathname === ROUTES.REPOSITORIES.route
            ? 'See what the Github community is most excited about today.'
            : ''
        }`}
        {`${
          location.pathname === ROUTES.DEVELOPERS.route
            ? 'These are the developers building hot tools today.'
            : ''
        }`}
      </h5>
    </header>
  )
}

export default Header
