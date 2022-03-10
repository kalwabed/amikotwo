import React from 'react'

import { Flex } from '~components/ui'
import Footer from './footer'

const LayoutRoot: React.FC = ({ children }) => {
  return (
    <Flex css={{ minHeight: '100%', width: '100%', flexDirection: 'column', flex: '1 1 auto' }}>
      {children}
      <Footer />
    </Flex>
  )
}

export default LayoutRoot
