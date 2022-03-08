import React from 'react'

import { Flex } from '~components/ui'

const LayoutRoot: React.FC = ({ children }) => {
  return <Flex css={{ minHeight: '100%', width: '100%', flexDirection: 'column', flex: '1 1 auto' }}>{children}</Flex>
}

export default LayoutRoot
