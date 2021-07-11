import { IRepository } from '../../../../types/repository'

export interface IRepositoryListProps {
  repositories: IRepository[]
  toggleStar: (id: number, isStarred: boolean) => void
}
