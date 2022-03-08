import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { presence } from '~services/amikom'
import { Box, Button, Input, InputLabel } from './ui'

const Presence = () => {
  const { register, handleSubmit } = useForm()
  const [isLoading, setIsLoading] = useState(false)

  const handePresence = async (data: { presenceCode: string }) => {
    setIsLoading(true)
    toast.loading('Memproses...', {
      id: 'loading'
    })

    const response = await presence(data.presenceCode)
    toast.remove('loading')
    if (response.success) {
      toast.success('Berhasil presensi', {
        duration: 2000
      })
    } else {
      toast.error(response.message, {
        duration: 2000
      })
    }

    setIsLoading(false)
  }

  return (
    <Box as="form" css={{ width: '100%' }}>
      <Box role="group" css={{ marginTop: '$4' }}>
        <InputLabel htmlFor="presenceCode">Masukkan kode presensi</InputLabel>
        <Input autoFocus id="presenceCode" {...register('presenceCode', { required: true })} />
      </Box>

      <Button
        isFullWidth
        css={{ marginTop: '12px' }}
        role="button"
        type="submit"
        disabled={isLoading}
        isLoading={isLoading}
        onClick={handleSubmit(handePresence)}
      >
        {isLoading ? '...' : 'Presensi'}
      </Button>
    </Box>
  )
}

export default Presence
