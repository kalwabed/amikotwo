import { parseUserSession } from '~utils/auth-cookie'

type ApiResponse = {
  success: boolean
  message: string
  access_token?: string
}

const API_URL = 'https://apiamikom.vercel.app'

export async function signIn({ nim, password }: { nim: string; password: string }): Promise<ApiResponse> {
  if (!nim || !password) {
    throw new Error('NIM dan Password harus diisi')
  }

  try {
    const res = await fetch(`${API_URL}/auth?nim=${nim}&password=${password}`)

    return (await res.json()) as ApiResponse
  } catch (error) {
    console.error(error)
  }
}

export async function presence(presenceCode: string) {
  if (!presenceCode) throw new Error('Presence Code harus diisi')

  const { accessToken, nim } = parseUserSession()

  try {
    const rest = await fetch(`${API_URL}/absen/v2?nim=${nim}&kode=${presenceCode}&token=${accessToken}`)

    return (await rest.json()) as ApiResponse
  } catch (error) {
    console.error(error)
  }
}
