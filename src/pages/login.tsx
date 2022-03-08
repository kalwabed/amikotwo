import React from 'react'

import FormLogin from '~components/form-login'
import { withUnAuthorizedUser } from '~components/hoc/with-auth'
import Card from '~components/shared/card'
import Container from '~components/shared/container'
import { LogoImage } from '~components/shared/logo'
import { Flex, Text } from '~components/ui'

const Loginpage = () => {
  return (
    <Container css={{ my: 'auto' }}>
      <Flex css={{ flexDirection: 'column', alignItems: 'center' }}>
        <LogoImage height={55} width={55} />
        <Text as="h1" css={{ fontWeight: '$medium', fontSize: '$2xl' }}>
          Sign in to AmikoTwo
        </Text>
      </Flex>
      <Card>
        <FormLogin />
      </Card>
    </Container>
  )
}

export default withUnAuthorizedUser(Loginpage)
