import { IUser } from './user'

export interface IRepositoryBasic {
  description?: string
  repositoryName: string
  url: string
}

export interface IRepository extends IRepositoryBasic {
  builtBy: IUser[]
  forks: number
  language?: string
  languageColor: string
  rank: number
  since: string
  starsSince: number
  totalStars: number
  username: string
  isStarred?: boolean
}
