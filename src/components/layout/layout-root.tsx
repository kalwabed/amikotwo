import React from 'react'

import { Box } from '~components/shared'

const LayoutRoot: React.FC = ({ children }) => {
  return <Box css={{ display: 'flex', minHeight: '100%', width: '100%', flexDirection: 'column' }}>{children}</Box>
}

export default LayoutRoot
