import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Text } from '~components/ui'

import { checkUserSession } from '~utils/auth-cookie'

export const withAuthorizedUser = Component =>
  function WithAuth(props) {
    const [isValid, setIsValid] = useState(false)
    const router = useRouter()

    useEffect(() => {
      const userSession = checkUserSession()

      if (userSession) {
        setIsValid(true)
      } else {
        router.push('/login')
      }
    }, [router])

    if (isValid) return <Component {...props} />

    return <Text css={{ textAlign: 'center' }}>Loading...</Text>
  }

export const withUnAuthorizedUser = Component =>
  function WithUnAuth(props) {
    const [isValid, setIsValid] = useState(false)
    const router = useRouter()

    useEffect(() => {
      const userSession = checkUserSession()

      if (userSession) {
        router.push('/')
      } else {
        setIsValid(true)
      }
    }, [router])

    if (isValid) return <Component {...props} />

    return <Text css={{ textAlign: 'center' }}>Loading...</Text>
  }
