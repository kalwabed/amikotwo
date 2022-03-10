import React from 'react'

import { Box } from '~components/ui'

const AbstractGradients = () => {
  return (
    <Box css={{ position: 'absolute', overflow: 'hidden', top: 0, w: '100%', h: '100%', zIndex: '-1' }}>
      <Box
        css={{
          right: '-375px',
          top: '50%',
          marginTop: '-200px',
          position: 'absolute',
          filter: 'blur(100px)',
          transform: 'rotate(90deg)',
          height: '400px',
          width: '400px',
          background: 'linear-gradient(90deg,#f36 0,#f90 100%)',
          zIndex: '-1'
        }}
      />

      <Box
        css={{
          left: '-100px',
          bottom: '-100px',
          marginTop: '-200px',
          position: 'absolute',
          filter: 'blur(100px)',
          transform: 'rotate(90deg)',
          height: '200px',
          width: '200px',
          background: 'linear-gradient(90deg,#270c33 0,#138eb8 100%)',
          zIndex: '-1'
        }}
      />
    </Box>
  )
}

export default AbstractGradients
