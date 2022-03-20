import React from 'react'
import * as Stitches from '@stitches/react'

import { Box } from '~components/ui'

const Divider = ({ css }: { css?: Stitches.CSS }) => {
  return (
    <Box
      as="span"
      aria-hidden="true"
      css={{ width: '25%', padding: '1px', my: '10px', bgColor: '$gray6', mx: 'auto', ...css }}
    />
  )
}

export default Divider
