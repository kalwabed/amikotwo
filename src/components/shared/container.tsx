import { styled } from 'stitches.config'

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  mx: 'auto',
  px: '$4',
  width: '100%',
  maxWidth: '384px',
  '@md': {
    px: '0',
    maxWidth: '448px'
  },

  variants: {
    size: {
      1: {
        maxWidth: '384px'
      },
      2: {
        maxWidth: '448px'
      }
    }
  }
})

export default Container
