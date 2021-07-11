import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import Box from '@material-ui/core/Box'

const DevelopersSkeleton: React.FC = () => {
  return (
    <>
      {[...Array(6)].map((value: number, index: number) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <Box key={index}>
            <Box display="flex" justifyContent="space-between" p={1}>
              <Box display="flex">
                <Skeleton variant="circle" width={40} height={40} />
                <Box marginLeft="10px">
                  <Skeleton variant="text" width={150} />
                  <Skeleton variant="text" width={70} />
                </Box>
              </Box>
              <Box>
                <Skeleton variant="text" width={150} />
                <Skeleton variant="text" width={70} />
                <Skeleton variant="text" width={150} />
              </Box>
              <Box display="flex">
                <Box marginRight="10px">
                  <Skeleton variant="rect" width={95} height={28} />
                </Box>
                <Skeleton variant="rect" width={64} height={28} />
              </Box>
            </Box>
            <Skeleton variant="text" />
          </Box>
        )
      })}
    </>
  )
}

export default DevelopersSkeleton
