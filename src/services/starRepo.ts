import { useQueryClient, useMutation } from 'react-query'
import { FilterParams } from '../types/filterParams'
import { IRepository } from '../types/repository'
import { wait } from '../utils/wait'

type Params = {
  id: number
  repositories: IRepository[]
}

const updateStarRepository = (
  repository: IRepository | undefined
): IRepository | undefined => {
  if (!repository) return repository
  const updatedRepository = {
    ...repository,
    isStarred: true,
    starsSince: repository.starsSince + 1,
    totalStars: repository.totalStars + 1,
  }
  return updatedRepository
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function addTodo({ id, repositories }: Params): Promise<any> {
  await wait(600)
  const repository = repositories.find((repo) => repo.rank === id)
  const updatedRepository = updateStarRepository(repository)
  return Promise.resolve({ updatedRepository })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useStarRepo = (filters: FilterParams): any => {
  const queryClient = useQueryClient()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return useMutation<Response, any, Params, Response>(
    (params) => addTodo(params),
    {
      onMutate: async (params) => {
        const { id } = params
        await queryClient.cancelQueries(['repositories', filters])
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let previousState = queryClient.getQueryData<any>([
          'repositories',
          filters,
        ])

        if (previousState) {
          const indexofRepository = previousState.findIndex(
            (repository: IRepository) => repository.rank === id
          )

          const updatedRepository = updateStarRepository(
            previousState[indexofRepository]
          )

          previousState = {
            ...previousState,
            [indexofRepository]: {
              ...updatedRepository,
            },
          }

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          queryClient.setQueryData<any>('repositories', previousState)
        }
        return previousState
      },
      onError: (err, variables, previousValue) => {
        queryClient.setQueryData(['repositories', filters], previousValue)
      },
      onSettled: () => {
        queryClient.invalidateQueries(['repositories', filters])
      },
    }
  )
}
