import React from 'react'

import FormLogin from '~components/form-login'
import { withUnAuthorizedUser } from '~components/hoc/with-auth'
import { Container } from '~components/ui'

const Loginpage = () => {
  return (
    <Container>
      <h1>Login</h1>
      <FormLogin />
    </Container>
  )
}

export default withUnAuthorizedUser(Loginpage)
