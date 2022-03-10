import * as Stitches from '@stitches/react'
import React from 'react'

import { Flex } from '~components/ui'

const Card: React.FC<{ css?: Stitches.CSS }> = ({ children, css }) => {
  return (
    <Flex
      css={{
        flexDirection: 'column',
        padding: '$8',
        borderRadius: '4px',
        backgroundColor: '$gray2',
        border: '1px solid $gray6',
        boxShadow: '$md',
        backdropFilter: 'blur(10px)',
        background: 'hsla(0, 0%, 97.25490196078431%, 0.26)',
        ...css
      }}
    >
      {children}
    </Flex>
  )
}

export default Card
