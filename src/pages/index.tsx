import { styled } from 'stitches.config'
import FormLogin from '~components/form-login'
import Box from '~components/shared/box'
import Text from '~components/shared/text'
import StitchesLogo from '~components/StitchesLogo'

const Container = styled('div', {
  marginX: 'auto',
  paddingX: '$4',
  width: '100%',
  '@md': {
    paddingX: '0'
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

export default function Home() {
  return (
    <Container size={{ '@initial': '1', '@md': '2' }} css={{ marginY: '50px' }}>
      <Box css={{ display: 'flex', alignItems: 'center' }}>
        <StitchesLogo />
        <Text css={{ marginLeft: '$1' }}>AmikoTwo</Text>
      </Box>
      <FormLogin />
    </Container>
  )
}
