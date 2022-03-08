import { withAuthorizedUser } from '~components/hoc/with-auth'
import Presence from '~components/presence'
import { Box, Button, Container, Flex, Text } from '~components/ui'
import Logo from '~components/shared/logo'
import { removeUserSession } from '~utils/auth-cookie'
import { useRouter } from 'next/router'

function HomePage() {
  const router = useRouter()

  const handleUserLogout = () => {
    removeUserSession()
    router.push('/login')
  }

  return (
    <Container css={{ my: 'auto' }}>
      <Flex
        css={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '$8',
          borderRadius: '4px',
          backgroundColor: '$gray2',
          border: '1px solid $gray6',
          boxShadow: '$base'
        }}
      >
        <Logo />
        <Flex
          css={{
            mt: '$4',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%'
          }}
        >
          <Text css={{ fontSize: '$sm' }}>
            Hai, <b>21.11.4078</b> 👋
          </Text>

          <Button
            variant="ghost"
            colorScheme="gray"
            css={{ padding: '$0', textDecoration: 'underline' }}
            onClick={handleUserLogout}
          >
            mau pergi?
          </Button>
        </Flex>

        <Box css={{ marginTop: '10px', width: '100%' }}>
          <Presence />
        </Box>
      </Flex>
    </Container>
  )
}

export default withAuthorizedUser(HomePage)
