import { AppProps } from 'next/app'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'

import LayoutRoot from '~components/layout/layout-root'
import globalStyles from '~global-styles'

export default function MyApp({ Component, pageProps }: AppProps) {
  if (typeof window === 'undefined') return null

  globalStyles()

  return (
    <>
      <Head>
        <title>AmikoTwo</title>
      </Head>
      <LayoutRoot>
        <Toaster />
        <Component {...pageProps} />
      </LayoutRoot>
    </>
  )
}
