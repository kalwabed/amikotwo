import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { presence } from '~services/amikom'
import { Box, Button, Flex, Grid, Input, InputLabel, Text } from './ui'

const Presence = () => {
  const { register, handleSubmit } = useForm()
  const [isLoading, setIsLoading] = useState(false)
  const [presenceHistory, setPresenceHistory] = useState<string[]>([])

  useEffect(() => {
    const prevCodes = JSON.parse(localStorage.getItem('presenceCode')) as string[]
    setPresenceHistory(prevCodes ?? [])
  }, [])

  const handePresence = async (data: { presenceCode: string }) => {
    const { presenceCode } = data
    setIsLoading(true)
    toast.loading('Memproses...', {
      id: 'loading'
    })

    //Handle user presence code and save it to local storage
    const prevCodes = JSON.parse(localStorage.getItem('presenceCode')) as string[]
    localStorage.setItem('presenceCode', JSON.stringify([presenceCode, ...(prevCodes.slice(0, 2) || [])]))

    const response = await presence(presenceCode)
    toast.remove('loading')

    if (response.success) {
      toast.success('Berhasil presensi', {
        duration: 2000
      })
    } else if (response.status === 500) {
      // user session expired
      toast.error('Sesi berakhir 😢 Silakan login kembali', {
        duration: 2000
      })
    } else {
      toast.error(response.message, {
        duration: 2000
      })
    }

    setIsLoading(false)
  }

  const handleCopyPresenceCode = async (code: string) => {
    await navigator.clipboard.writeText(code)
    toast.success('Kode disalin!')
  }

  return (
    <Box as="form" css={{ width: '100%' }}>
      <Box role="group" css={{ marginTop: '$4' }}>
        <InputLabel htmlFor="presenceCode">Masukkan kode presensi</InputLabel>
        <Input autoFocus maxLength={5} id="presenceCode" {...register('presenceCode', { required: true })} />
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

      <Text css={{ marginTop: '$8' }}>Riwayat</Text>
      <Grid css={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '$4', my: '8px' }}>
        {presenceHistory.map((code, i) => (
          <Button
            key={code.concat(i.toString())}
            onClick={e => {
              e.preventDefault()
              handleCopyPresenceCode(code)
            }}
            colorScheme="yellow"
            css={{
              flexDirection: 'column',
              marginBottom: '12px',
              padding: '8px 10px'
            }}
          >
            {code}
          </Button>
        ))}
      </Grid>
    </Box>
  )
}

export default Presence
