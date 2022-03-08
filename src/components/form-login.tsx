import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { signIn } from '~services/amikom'
import { createUserSession } from '~utils/auth-cookie'
import { Box, Button, Input, InputLabel } from './ui'

type LoginForm = {
  nim: string
  password: string
}

const FormLogin = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit } = useForm()
  const router = useRouter()

  const handleSubmitForm = async (data: LoginForm) => {
    setIsLoading(true)
    toast.loading('Memproses...', {
      id: 'loading'
    })
    const res = await signIn(data)

    toast.remove('loading')
    if (res.success) {
      toast.success('Berhasil masuk', {
        duration: 2000
      })

      createUserSession({ accessToken: res.access_token, nim: data.nim })
      router.push('/')
    } else {
      toast.error(res.message, {
        duration: 2000
      })
    }

    setIsLoading(false)
  }

  return (
    <Box css={{ my: '$4' }} as="form" onSubmit={handleSubmit(handleSubmitForm)}>
      <Box role="group">
        <InputLabel htmlFor="nim">NIM</InputLabel>
        <Input id="nim" {...register('nim', { required: true })} />
      </Box>

      <Box role="group" css={{ marginTop: '$4' }}>
        <InputLabel htmlFor="password">Kata Sandi</InputLabel>
        <Input id="password" type="password" {...register('password', { required: true })} />
      </Box>

      <Button
        isFullWidth
        disabled={isLoading}
        isLoading={isLoading}
        role="button"
        type="submit"
        css={{ marginTop: '$8' }}
      >
        {isLoading ? '...' : 'Masuk'}
      </Button>
    </Box>
  )
}

export default FormLogin
