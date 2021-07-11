import { IUser } from './user'
import { IRepositoryBasic } from './repository'

export interface IDeveloper extends IUser {
  popularRepository: IRepositoryBasic
  rank: number
  since: string
  name: string
  isFollowed?: boolean
}
