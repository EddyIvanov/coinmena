import React from 'react'
import ControlPanel from '../../components/ControlPanel'
import { IFilterOption } from '../../components/Filters/types'
import { useFetchDevelopers } from '../../services/fetchDevelopers'
import DeveloperList from './components/DeveloperList'
import DevelopersSkeleton from './skeleton'

const Developers: React.FC = () => {
  const [filters, setFilters] = React.useState({})
  const { isLoading, isError, data, error } = useFetchDevelopers(filters)

  const handleFilterChange = (filter: IFilterOption): void => {
    const { name, value } = filter
    setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  return (
    <>
      <ControlPanel onFilterChange={handleFilterChange} />
      {isLoading && <DevelopersSkeleton />}
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {isError && <div>{(error as any).message}</div>}
      {data && <DeveloperList developers={data} />}
    </>
  )
}

export default Developers
