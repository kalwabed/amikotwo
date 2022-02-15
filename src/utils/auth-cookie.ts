import cookie from 'js-cookie'

const USER_AUTH_KEY = 'session'

export const createUserSession = (accessToken: string): void => {
  cookie.set(USER_AUTH_KEY, accessToken, {
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
