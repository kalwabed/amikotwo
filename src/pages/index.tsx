import { withAuthorizedUser } from '~components/hoc/with-auth'
import { Box, Container, Text } from '~components/shared'
import StitchesLogo from '~components/StitchesLogo'

function HomePage() {
  return (
    <Container css={{ marginY: '50px' }}>
      <Box css={{ display: 'flex', alignItems: 'center' }}>
        <StitchesLogo />
        <Text css={{ marginLeft: '$1' }}>AmikoTwo</Text>
      </Box>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam praesentium laborum temporibus nesciunt tempore vel
      recusandae similique suscipit dolores sit, ut perferendis dolor harum ipsa maiores culpa odit maxime quaerat.
    </Container>
  )
}

export default withAuthorizedUser(HomePage)
