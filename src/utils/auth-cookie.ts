import cookie from 'js-cookie'

const USER_AUTH_KEY = 'session'

type UserSessionProps = {
  accessToken: string
  nim: string
}

export const createUserSession = (data: UserSessionProps): void => {
  const { accessToken, nim } = data
  const encryptedNim = window.btoa(nim)
  const sessionPayload = `${accessToken}.${encryptedNim}`

  cookie.set(USER_AUTH_KEY, sessionPayload, {
    expires: 30, // 30 days
    secure: true,
    sameSite: 'strict'
  })
}

export const checkUserSession = (): boolean => {
  const cookieValue = cookie.get(USER_AUTH_KEY)

  return cookieValue ? true : false
}

export const removeUserSession = (): void => {
  cookie.remove(USER_AUTH_KEY)
}

export const parseUserSession = (): { nim: string; accessToken: string } => {
  if (!checkUserSession()) throw new Error('User not logged in')

  const cookieValue = cookie.get(USER_AUTH_KEY)
  const [accessToken, encryptedNim] = cookieValue.split('.')

  return { nim: window.atob(encryptedNim), accessToken }
}
