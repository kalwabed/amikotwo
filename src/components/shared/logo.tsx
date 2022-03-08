import Image from 'next/image'
import React from 'react'

import { Flex, Text } from '~components/ui'
import logo from '~assets/mesh-logo.png'

const Logo = () => {
  return (
    <Flex css={{ alignItems: 'center' }}>
      <LogoImage />
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

export const LogoImage = ({ height = 35, width = 35 }: { height?: number; width?: number }) => {
  return (
    <>
      <Image src={logo} height={height} width={width} className="logo-rounded" />

      <style jsx global>
        {`
          .logo-rounded {
            border-radius: 999px;
          }
        `}
      </style>
    </>
  )
}

export default Logo
