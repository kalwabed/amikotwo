import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { styled } from 'stitches.config'
import { signIn } from '~services/amikom'
import { Box } from './shared'

const Input = styled('input', {
  position: 'relative',
  height: '2.5rem',
  width: '100%',
  padding: '$2',
  border: '2px solid $gray7',
  borderRadius: '4px',
  transition: 'border-color 0.2s ease-in-out',
  outlineOffset: '2px',
  '&:hover': {
    borderColor: '$gray8'
  },
  '&:focus': {
    borderColor: '$purple9',
    outline: 'none'
  }
})

const InputLabel = styled('label', {
  display: 'block',
  marginBottom: '$2',
  color: '$hiContrast',
  fontWeight: '600'
})

const LoginButton = styled('button', {
  display: 'inline-flex',
  appearance: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  height: '2.5rem',
  width: 'auto',
  padding: '$2',
  userSelect: 'none',
  lineHeight: '1.2',
  outline: 'transparent solid 2px',
  outlineOffset: '2px',
  borderRadius: '5px',
  minWidth: '2.5rem',
  verticalAlign: 'middle',
  color: '$hiContrast',
  backgroundColor: 'White',
  border: 'Black 3px solid',
  fontSize: '$base',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease-out',
  '&:hover': {
    backgroundColor: '$sky4'
  },
  '&:focus': {
    backgroundColor: '$sky5'
  },
  variants: {
    isFullWidth: {
      true: {
        width: '100%'
      },
      false: {
        width: 'auto'
      }
    },
    isLoading: {
      true: {
        backgroundColor: '$sky7',
        '&:hover': {
          backgroundColor: '$sky7'
        },
        '&:focus': {
          backgroundColor: '$sky7'
        }
      },
      false: {}
    }
  }
})

type LoginForm = {
  nim: string
  password: string
}

const FormLogin = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit } = useForm()

  const handleSubmitForm = async (data: LoginForm) => {
    try {
      setIsLoading(true)
      toast.promise(signIn({ ...data }), {
        loading: 'Loading...',
        success: 'Success',
        error: 'Error'
      })
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Box css={{ marginY: '$4' }} as="form" onSubmit={handleSubmit(handleSubmitForm)}>
      <Box role="group">
        <InputLabel htmlFor="nim">NIM</InputLabel>
        <Input id="nim" {...register('nim')} />
      </Box>

      <Box role="group" css={{ marginTop: '$4' }}>
        <InputLabel htmlFor="password">Kata Sandi</InputLabel>
        <Input id="password" type="password" {...register('password')} />
      </Box>

      <LoginButton
        isFullWidth
        disabled={isLoading}
        isLoading={isLoading}
        role="button"
        type="submit"
        css={{ marginTop: '$8' }}
      >
        {isLoading ? '...' : 'Masuk'}
      </LoginButton>
    </Box>
  )
}

export default FormLogin
