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
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>AmikoTwo</title>
        <meta name="description" content="Web base Bot Presensi. Originated from Amikom Bot Presensi." />
        <meta name="image" content="https://amikotwo.vercel.app/assets/cover.png" />
        <meta property="og:description" content="Web base Bot Presensi. Originated from Amikom Bot Presensi." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="AmikoTwo" />
        <meta property="og:title" content="AmikoTwo" />
        <meta name="og:image" content="https://amikotwo.vercel.app/assets/cover.png" />
        <meta name="og:url" content="https://amikotwo.vercel.app" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="icon" href="/favicon.ico" sizes="any" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" />
        <link rel="icon" href="/assets/icon.svg" type="image/svg+xml" />
      </Head>
      <LayoutRoot>
        <Toaster />
        <Component {...pageProps} />
      </LayoutRoot>
    </>
  )
}
