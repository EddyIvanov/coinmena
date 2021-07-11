import { IRepository } from '../../../../types/repository'

export interface IRepositoryItemProps {
  repository: IRepository
  toggleStar: (id: number, isStarred: boolean) => void
}
