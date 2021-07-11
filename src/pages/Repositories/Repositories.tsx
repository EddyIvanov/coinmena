import React from 'react'
import ControlPanel from '../../components/ControlPanel'
import { IFilterOption } from '../../components/Filters/types'
import { useFetchRepositories } from '../../services/fetchRepositories'
import { useStarRepo } from '../../services/starRepo'
import RepositoryList from './components/RepositoryList'
import RepositoriesSkeleton from './skeleton'

const Repositories: React.FC = () => {
  const [filters, setFilters] = React.useState({})
  const { isLoading, isError, data, error } = useFetchRepositories(filters)
  const starMutation = useStarRepo(filters)

  const handleFilterChange = (filter: IFilterOption): void => {
    const { name, value } = filter
    setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  const handleToggleStar = (id: number, isStarred: boolean): void => {
    if (!data) return

    if (isStarred) {
      starMutation.mutate({ id, repositories: data })
    }
  }
  return (
    <>
      <ControlPanel onFilterChange={handleFilterChange} />
      {isLoading && <RepositoriesSkeleton />}
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {isError && <div>{(error as any).message}</div>}
      {data && (
        <RepositoryList repositories={data} toggleStar={handleToggleStar} />
      )}
    </>
  )
}

export default Repositories
