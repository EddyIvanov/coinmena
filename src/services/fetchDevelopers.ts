import axios from 'axios'
import { useQuery, UseQueryResult } from 'react-query'
import { DEVELOPERS_API } from '../constants/apis'
import { IDeveloper } from '../types/developer'
import { FilterParams } from '../types/filterParams'
import { addFiltersToUrl } from '../utils/addFiltersToUrl'

export const fetchDevelopers = async (
  filters: FilterParams
): Promise<IDeveloper[]> => {
  const fetchUrl = addFiltersToUrl(DEVELOPERS_API, filters)
  const { data } = await axios.get(fetchUrl)
  return data
}

export const useFetchDevelopers = (
  filters: FilterParams
): UseQueryResult<IDeveloper[], unknown> => {
  return useQuery(['developers', filters], () => fetchDevelopers(filters))
}
