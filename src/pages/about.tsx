import { NextSeo } from 'next-seo'
import React from 'react'

import Container from '~components/shared/container'
import Divider from '~components/shared/divider'
import TextLink from '~components/shared/text-link'
import { Box, Flex, Text } from '~components/ui'

const AboutPage = () => {
  return (
    <Container css={{ lineHeight: '$normal', mt: '20px' }}>
      <NextSeo title="About - AmikoTwo" />

      <Flex css={{ flexDirection: 'column' }}>
        <Text as="h1" css={{ mb: '.3rem' }}>
          About / Tentang
        </Text>
        <Text>
          Website ini dibuat untuk memberikan opsi penggunaan website kepada para pengguna Bot Presensi Amikom by
          @binsarjr, juga sebagai backup jika sewaktu-waktu Bot mengalami trouble.
        </Text>
        <Divider />
        <Text>
          Dikembangkan oleh{' '}
          <TextLink isExternal href="https://www.instagram.com/kalwabed">
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
