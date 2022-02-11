import { styled } from 'stitches.config'

const Container = styled('div', {
  marginX: 'auto',
  paddingX: '$4',
  width: '100%',
  maxWidth: '384px',
  '@md': {
    paddingX: '0',
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
