import React from 'react'
import Container from '~components/shared/container'
import TextLink from '~components/shared/text-link'
import { Box, Flex, Text } from '~components/ui'

const AboutPage = () => {
  return (
    <Container css={{ lineHeight: '$normal', mt: '20px' }}>
      <Flex css={{ flexDirection: 'column' }}>
        <Text as="h1" css={{ mb: '.3rem' }}>
          About / Tentang
        </Text>
        <Text>
          Website ini dibuat untuk memberikan opsi penggunaan website kepada para pengguna Bot Presensi Amikom by
          @binsarjr, juga sebagai backup jika sewaktu-waktu Bot mengalami trouble.
        </Text>
        <Box
          as="span"
          aria-hidden="true"
          css={{ width: '25%', padding: '1px', my: '10px', bgColor: '$gray6', mx: 'auto' }}
        />
        <Text>
          Dikembangkan oleh{' '}
          <TextLink isExternal href="https://kalwabed.xyz">
            Kalwabed Rizki
          </TextLink>{' '}
          menggunakan Next.js dan Stitches.
        </Text>

        <Box>
          <TextLink isExternal href="https://github.com/kalwabed/amikotwo">
            Source code
          </TextLink>
          .
        </Box>
      </Flex>
    </Container>
  )
}

export default AboutPage
