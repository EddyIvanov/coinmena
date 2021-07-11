import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import Box from '@material-ui/core/Box'

const RepositoriesSkeleton: React.FC = () => {
  return (
    <>
      {[...Array(6)].map((value: number, index: number) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <Box key={index}>
            <Box display="flex" justifyContent="space-between" p={1}>
              <Box marginRight="10px">
                <Skeleton variant="text" width={200} />
                <Skeleton variant="text" width={300} />
                <Box display="flex" alignItems="center">
                  <Box marginRight="10px">
                    <Skeleton variant="text" width={30} />
                  </Box>
                  <Box marginRight="10px">
                    <Skeleton variant="text" width={30} />
                  </Box>
                  <Box marginRight="10px">
                    <Skeleton variant="text" width={30} />
                  </Box>
                  <Box marginRight="10px">
                    <Skeleton variant="text" width={30} />
                  </Box>
                  <Box display="flex" marginLeft="10px">
                    <Box marginRight="5px">
                      <Skeleton variant="circle" width={23} height={23} />
                    </Box>
                    <Box marginRight="5px">
                      <Skeleton variant="circle" width={23} height={23} />
                    </Box>
                    <Box marginRight="5px">
                      <Skeleton variant="circle" width={23} height={23} />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                display="flex"
                alignItems="flex-end"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Skeleton variant="rect" width={70} height={28} />
                <Skeleton variant="text" width={70} />
              </Box>
            </Box>
            <Skeleton variant="text" />
          </Box>
        )
      })}
    </>
  )
}

export default RepositoriesSkeleton
