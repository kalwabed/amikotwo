import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const WithAuthWrapper = Component =>
  function WithAuth(props) {
    const [isValid, setIsValid] = useState(false)
    const router = useRouter()

    useEffect(() => {
      const userSession = sessionStorage.getItem('userSession')

      if (userSession) {
        setIsValid(true)
      } else {
        router.push('/login')
      }
    }, [])

    if (isValid) return <Component {...props} />

    return <p>loading...</p>
  }

export default WithAuthWrapper
