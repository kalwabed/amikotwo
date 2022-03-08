import Image from 'next/image'
import React from 'react'

import { Flex, Text } from '~components/ui'
import logo from '~assets/mesh-logo.png'

const Logo = () => {
  return (
    <Flex css={{ alignItems: 'center' }}>
      <Image src={logo} height={35} width={35} className="logo-rounded" />
      <Text as="h1" css={{ marginLeft: '$1', fontWeight: 'bold', letterSpacing: '0.025rem', fontSize: '$2xl' }}>
        AmikoTwo
      </Text>

      <style jsx global>
        {`
          .logo-rounded {
            border-radius: 999px;
          }
        `}
      </style>
    </Flex>
  )
}

export default Logo
