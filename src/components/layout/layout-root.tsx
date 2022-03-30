import React from 'react'

import AbstractGradients from '~components/abstract/gradients'
import { Flex, Text } from '~components/ui'
import Footer from './footer'

const LayoutRoot: React.FC = ({ children }) => {
  return (
    <Flex css={{ minHeight: '100%', width: '100%', flexDirection: 'column', flex: '1 1 auto' }}>
      <Flex
        css={{
          justifyContent: 'center',
          backgroundColor: '$purple5',
          padding: '$4',
          textAlign: 'center',
          width: '100%'
        }}
      >
        <Text css={{ margin: 0, padding: 0 }}>Sementara website ini dalam mode maintenance</Text>
      </Flex>
      {children}
      <AbstractGradients />
      <Footer />
    </Flex>
  )
}

export default LayoutRoot
