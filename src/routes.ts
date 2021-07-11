import Repositories from './pages/Repositories'
import Developers from './pages/Developers'
import { ROUTES } from './constants/routes'

const routes = [
  {
    path: ROUTES.REPOSITORIES.route,
    component: Repositories,
  },
  {
    path: ROUTES.DEVELOPERS.route,
    component: Developers,
  },
]

export default routes
