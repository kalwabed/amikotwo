import Link from 'next/link'
import React from 'react'

import { Flex, Text } from '~components/ui'

const Footer = () => {
  return (
    <Flex as="footer" css={{ mx: 'auto', mt: 'auto', mb: '3rem', '@md': { mb: '8rem' } }}>
      <Link href="/about" passHref>
        <Text
          as="a"
          css={{
            color: '$loContrast',
            textDecoration: 'none',
            '&:hover': { color: '$hiContrast' },
            '&:focus': { outlineColor: '$sky6', outlineOffset: '1px' }
          }}
        >
          About
        </Text>
      </Link>
    </Flex>
  )
}

export default Footer
