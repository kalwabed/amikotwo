import { Box, Container, Text } from '~components/shared'
import StitchesLogo from '~components/StitchesLogo'

export default function HomePage() {
  return (
    <Container css={{ marginY: '50px' }}>
      <Box css={{ display: 'flex', alignItems: 'center' }}>
        <StitchesLogo />
        <Text css={{ marginLeft: '$1' }}>AmikoTwo</Text>
      </Box>
    </Container>
  )
}
