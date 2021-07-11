import axios from 'axios'
import { useQuery, UseQueryResult } from 'react-query'
import { REPOSITORIES_API } from '../constants/apis'
import { FilterParams } from '../types/filterParams'
import { IRepository } from '../types/repository'
import { addFiltersToUrl } from '../utils/addFiltersToUrl'

export const fetchRepositories = async (
  filters: FilterParams
): Promise<IRepository[]> => {
  const fetchUrl = addFiltersToUrl(REPOSITORIES_API, filters)
  const { data } = await axios.get(fetchUrl)
  return data
}

export const useFetchRepositories = (
  filters: FilterParams
): UseQueryResult<IRepository[], unknown> => {
  return useQuery(['repositories', filters], () => fetchRepositories(filters))
}
