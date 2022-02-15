import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

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
    }, [])

    if (isValid) return <Component {...props} />

    return <p>loading...</p>
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
    }, [])

    if (isValid) return <Component {...props} />

    return <p>loading...</p>
  }
